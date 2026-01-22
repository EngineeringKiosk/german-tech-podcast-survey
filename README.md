# Deutschsprachige Tech-Podcast Umfrage

Eine vollständig anonyme, einzige-Seite Umfrage-Anwendung für deutschsprachige Tech-Podcast-Hörer*innen, erstellt mit Nuxt 3, TypeScript und Tailwind CSS.

## Features

- **Vollständig anonym**: Keine Cookies, kein Tracking, keine Datenspeicherung im Browser
- **SPA mit SSG**: Single Page Application mit statischer Generierung für optimale Performance
- **Responsive Design**: Funktioniert auf allen Geräten (Desktop, Tablet, Mobile)
- **Zugänglich**: WCAG-konform mit proper ARIA-Labels und Keyboard-Navigation
- **Conditional Logic**: Fragen werden basierend auf vorherigen Antworten dynamisch ein-/ausgeblendet
- **Optionale Fragen**: Alle Fragen sind optional, Nutzer können jederzeit absenden

## Tech Stack

- [Nuxt 3](https://nuxt.com/) - Vue.js Framework (SPA-Modus)
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [Vue 3 Composition API](https://vuejs.org/) - Modern reactive components

## Projektstruktur

```
podcast-survey/
├── assets/
│   └── css/
│       └── main.css           # Tailwind imports
├── pages/
│   ├── index.vue              # Haupt-Umfrageseite (alle Fragen)
│   └── privacy.vue            # Datenschutzerklärung
├── public/                    # Static assets
├── nuxt.config.ts             # Nuxt configuration (SPA mode)
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── questions.txt              # Original question source
```

## Setup

```bash
# Dependencies installieren
npm install

# Dev-Server starten (http://localhost:3000)
npm run dev

# Für Produktion builden
npm run build

# Statisch generieren (für Hosting)
npm run generate

# Preview des statischen Builds
npm run preview
```

## Umgebungsvariablen

Erstelle eine `.env` Datei basierend auf `.env.example`:

```bash
cp .env.example .env
```

Konfiguriere den Backend-Endpunkt:

```
NUXT_PUBLIC_SURVEY_API_URL=https://your-backend.com/api/survey
```

## API Integration

Die Umfrage sendet die Antworten als JSON POST-Request an den konfigurierten Endpunkt:

```typescript
// POST /api/survey
{
  "q01": ["podcast1", "podcast2"],
  "q04": "Ich suche mir gezielt Folgen raus",
  "q04a": ["Das Thema interessiert mich generell"],
  // ... weitere Antworten
}
```

### Erwartete Backend-Antwort

**Erfolg (200 OK):**
```json
{
  "success": true
}
```

**Fehler (4xx/5xx):**
```json
{
  "error": "Error message"
}
```

## Deployment

### Static Hosting (Empfohlen)

1. Statische Dateien generieren:
```bash
npm run generate
```

2. Den `.output/public` Ordner zu einem Static Host deployen:
   - [Netlify](https://netlify.com)
   - [Vercel](https://vercel.com)
   - [GitHub Pages](https://pages.github.com)
   - [Cloudflare Pages](https://pages.cloudflare.com)

### Node.js Server

```bash
npm run build
node .output/server/index.mjs
```

## Fragen-Struktur

Die Umfrage enthält ~34 Fragen zu:
- Podcast-Hörgewohnheiten
- Bevorzugte Formate und Themen
- Episode-Länge und Hörkontext
- Werbung und finanzielle Unterstützung
- Podcast-Qualitätskriterien
- Discovery und Community

### Conditional Questions

Folgende Fragen werden nur bei bestimmten Antworten angezeigt:
- **Q04A**: Nur wenn Q04 ≠ "Ich höre (fast) jede Folge"
- **Q08A**: Nur wenn Q08 ≠ "Mag ich nicht"
- **Q12A**: Nur wenn Q12 === "Ja"
- **Q19A**: Nur wenn Q19 ≠ "Nie"
- **Q28A**: Nur wenn Q28 === "Ja, das finde ich gut..."

## Datenschutz

- **Keine Cookies**: Die Anwendung setzt keine Cookies
- **Kein Tracking**: Keine Analytics oder Tracking-Tools integriert
- **Keine Browser-Speicherung**: Antworten werden nicht in LocalStorage/SessionStorage gespeichert
- **Anonym**: Keine IP-Adressen oder persönlichen Daten werden erfasst

## Accessibility

- Semantisches HTML mit proper `<fieldset>`, `<legend>`, und `<label>` Elementen
- ARIA-Labels für Screen Reader
- Keyboard-Navigation Support
- Focus-Indikatoren mit hohem Kontrast
- Responsive und Mobile-friendly

## Entwicklung

### Neue Fragen hinzufügen

Fragen sind direkt im Template (`pages/index.vue`) hardcodiert:

```vue
<section class="bg-white shadow-sm rounded-lg p-6">
  <fieldset>
    <legend class="text-xl font-semibold text-gray-900 mb-4">
      Deine Frage hier?
    </legend>
    <div class="space-y-3">
      <!-- Radio buttons, checkboxes, oder textarea -->
    </div>
  </fieldset>
</section>
```

### Conditional Logic hinzufügen

Verwende `v-if` basierend auf `answers` ref:

```vue
<section v-if="answers.q04 !== 'Ich höre (fast) jede Folge'" class="...">
  <!-- Conditional question -->
</section>
```

## License

MIT

## Support

Bei Fragen oder Problemen bitte ein Issue im Repository erstellen.
