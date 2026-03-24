# ADR: Survey Server Implementation

**Date:** 2026-03-24
**Status:** Accepted

---

## Context

The survey frontend (Nuxt 3) collects anonymous responses to the _Deutschsprachige Tech-Podcast Umfrage_. We need a lightweight backend that:

- Accepts `POST /api/survey` submissions from the frontend.
- Persists each response durably without requiring a database.
- Provides minimal bot protection without requiring third-party services (e.g. reCAPTCHA).
- Is easy to self-host via Docker with a mountable volume.

---

## Decision

### 1. Storage: One JSON file per submission in a mounted volume

Each incoming submission is written to a separate `.json` file inside a configurable data directory (default: `./data/`). The directory is exposed as a Docker volume so submissions survive container restarts and can be retrieved by mounting the volume from the host.

**File naming:**

```
data/<ISO8601-timestamp>_<uuid>.json
```

Example: `data/2026-03-24T21-05-00Z_a3f9c1b2.json`

**File contents – full JSON schema:**

```jsonc
{
  // ── Metadata ──────────────────────────────────────────────────────────────
  "meta": {
    "submittedAt": "2026-03-24T21:05:00.000Z", // ISO 8601 UTC timestamp
    "id": "a3f9c1b2-...", // UUID v4, used in filename
    "userAgent": "Mozilla/5.0 ...", // raw User-Agent header
    "ip": "127.0.0.1", // hashed/anonymised (SHA-256, no salt needed — already pseudonymous)
  },

  // ── Answers ───────────────────────────────────────────────────────────────
  "answers": {
    // Q1 – Podcast list
    "q01": ["Engineering Kiosk", "..."], // string[]

    // Q2–Q7 – Demographics
    "q_age": "25–34",
    "q_gender": "Männlich",
    "q_experience": "5–9",
    "q_education": "Bachelor",
    "q_it": "Ja, ich arbeite im IT-Bereich.",
    "q_it_area": "Softwareentwicklung (Frontend, Backend, Fullstack)", // conditional
    "q_it_role": "Senior-Fachkraft (z. B. Senior Developer, ...)", // conditional
    "q_company_size": "51–200",

    // Q8–Q10 – Listening habits
    "q_weekly_listening": "2–3 Stunden",
    "q04a": ["Thema der Episode", "..."], // string[] — episode selection criteria
    "q02": ["Interview", "..."], // string[] — preferred formats
    "q02_freitext": "...", // free text companion to q02

    // Q11–Q13 – Motivation & context
    "q05": "Beides",
    "q06": "Eher informativ",
    "q07": "Ja, meistens",
    "q08": "Stört mich nicht",
    "q09": "Ja",
    "q08a": "Ja", // conditional on q08 !== 'Mag ich nicht'

    // Q17–Q20 – Consumption patterns
    "q10": "30–45 Minuten",
    "q11": ["Beim Sport", "..."], // string[]
    "q11_freitext": "...", // free text companion to q11
    "q12": "Ja",
    "q12a": "...", // textarea, conditional on q12 === 'Ja'

    // Q20 – Topics
    "q13": ["Cloud & DevOps", "..."], // string[]
    "q13_freitext": "...", // free text companion to q13

    // Q21–Q25 – Episode quality & ratings
    "q15": "Manchmal",
    "q16": ["Zu langes Intro", "..."], // string[]
    "q17": "...", // textarea — unsubscribe reasons
    "q18": ["Gute Audioqualität", "..."], // string[]
    "q19a": ["Wenn ich besonders begeistert bin", "..."], // string[] — rating triggers

    // Q26–Q30 – Format preferences
    "q20": "Wöchentlich",
    "q21": "Ja, gerne",
    "q22": "Reines Audio",
    "q23": "Hilfreich – so weiß ich gleich, worauf ich mich einlasse",
    "q24": "Wichtig – finde ich nützlich und hilfreich",

    // Q31–Q34 – Community & co-determination
    "q25": "Schon mal gemacht, aber nicht regelmäßig",
    "q26": "Schön, wenn's passiert – aber kein Muss für mich",
    "q27": "Neutral / Kommt drauf an – solange die Inhalte und Qualität stimmen",
    "q28": "Ja, das finde ich gut – ich habe gern die Möglichkeit zur Mitwirkung",
    "q28a": ["In einer Community-Plattform (z. B. Discord, Mastodon, ...)"], // string[], conditional

    // Q35–Q37 – Discovery & open feedback
    "q29": ["Empfehlung von Freunden/Kolleg*innen", "..."], // string[]
    "q30": "Kommt drauf an",
    "q31": "...", // textarea — open feedback
  },
}
```

> Fields that were not shown to the user (conditional questions) will be `null` or omitted entirely.

---

### 2. Bot protection: Honeypot field

No third-party CAPTCHA service is used. Instead, a classic **honeypot** approach is implemented:

- The frontend renders a visually hidden `<input type="email">` field with the name `_email`.
- The field is hidden via CSS (`position: absolute; opacity: 0; pointer-events: none; tab-index: -1`) — **never `display:none`** (some bots detect that).
- A human user will never fill it in; a form-filling bot likely will.
- The server rejects any submission where `_email` is non-empty with HTTP `400`.

**Frontend field to add** (inside the `<form>` tag, e.g. at the top):

```html
<!-- Honeypot – must remain empty; hidden from real users via CSS -->
<div
  aria-hidden="true"
  style="position:absolute;opacity:0;pointer-events:none;height:0;overflow:hidden;"
>
  <label for="_email">E-Mail (bitte leer lassen)</label>
  <input
    id="_email"
    v-model="answers._email"
    type="email"
    name="_email"
    autocomplete="off"
    tabindex="-1"
  />
</div>
```

**Server-side check:**

```typescript
if (body._email && body._email.trim() !== "") {
  // Silently reject — return 200 to not reveal the protection mechanism
  res.status(200).json({ message: "Survey submitted successfully" });
  return;
}
```

> Returning `200` (rather than `400`) prevents bots from detecting and bypassing the check.

---

### 3. API

| Method | Path          | Description                                            |
| ------ | ------------- | ------------------------------------------------------ |
| `GET`  | `/health`     | Liveness check — returns `{ status: "ok", timestamp }` |
| `POST` | `/api/survey` | Accept survey submission, write to JSON file           |

**Request body for `POST /api/survey`:**

```jsonc
{
  "_email": "",          // honeypot — must be empty string
  "answers": { ... }    // all survey answers as described above
}
```

**Success response `201`:**

```json
{ "message": "Survey submitted successfully" }
```

**Error responses:**

| Status | Reason                                 |
| ------ | -------------------------------------- |
| `400`  | Malformed body (not an object)         |
| `200`  | Honeypot triggered (silent rejection)  |
| `500`  | Server error (file write failed, etc.) |

---

### 4. Infrastructure

- **Runtime:** Node.js 22 (Alpine), TypeScript compiled to ESM.
- **Framework:** Express 4 + `helmet` + `cors`.
- **Persistence:** `fs/promises` — each submission is written atomically via a temp file + rename to prevent partial reads.
- **Volume:** The `./data` directory inside the container is declared as a Docker volume mount point.

**`docker-compose.yml` volume:**

```yaml
services:
  server:
    volumes:
      - survey-data:/app/data
volumes:
  survey-data:
```

---

## Consequences

- **Simple operations:** No database to manage; backup = copy the `data/` volume.
- **Scalability:** Sufficient for a one-off survey with low concurrent writes. Not suitable for high-throughput production use.
- **Privacy:** IP addresses are SHA-256 hashed before storage. User-Agent is stored as-is for debugging purposes only and contains no PII.
- **Bot resistance:** The honeypot covers naive form-filling bots. It does not defend against targeted attacks or headless browsers that render JavaScript.
