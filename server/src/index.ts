import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { randomUUID, createHash } from "crypto";
import { mkdir, rename, writeFile } from "fs/promises";
import { join } from "path";

const app = express();
const port = parseInt(process.env.PORT || "3001", 10);
const DATA_DIR = process.env.DATA_DIR || join(process.cwd(), "data");

// Ensure data directory exists on startup
await mkdir(DATA_DIR, { recursive: true });

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.use(express.json());

// ── Helpers ────────────────────────────────────────────────────────────────

/** SHA-256 hash of the IP address for pseudonymous storage. */
function hashIp(ip: string): string {
  return createHash("sha256").update(ip).digest("hex");
}

/** Derive a safe filesystem timestamp string from a Date. */
function fileTimestamp(date: Date): string {
  return date.toISOString().replace(/[:.]/g, "-");
}

/** Write data atomically: write to a temp file, then rename into place. */
async function writeAtomic(filePath: string, data: string): Promise<void> {
  const tmp = filePath + ".tmp";
  await writeFile(tmp, data, "utf8");
  await rename(tmp, filePath);
}

// ── Routes ─────────────────────────────────────────────────────────────────

// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Survey submission endpoint
app.post("/api/survey", async (req: Request, res: Response) => {
  try {
    const body = req.body;

    if (!body || typeof body !== "object") {
      res.status(400).json({ error: "Invalid survey data" });
      return;
    }

    // ── Honeypot check ──────────────────────────────────────────────────────
    // If the hidden _email field is filled in, this is likely a bot.
    // Return 200 to avoid revealing the protection mechanism.
    if (typeof body._email === "string" && body._email.trim() !== "") {
      console.warn(
        "Bot submission detected (honeypot triggered), silently discarding.",
      );
      res.status(200).json({ message: "Survey submitted successfully" });
      return;
    }

    const { _email: _ignored, answers } = body as {
      _email?: string;
      answers: Record<string, unknown>;
    };

    if (!answers || typeof answers !== "object") {
      res.status(400).json({ error: "Missing answers payload" });
      return;
    }

    // ── Build submission record ─────────────────────────────────────────────
    const submittedAt = new Date();
    const id = randomUUID();

    const rawIp =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ??
      req.socket.remoteAddress ??
      "unknown";

    const record = {
      meta: {
        submittedAt: submittedAt.toISOString(),
        id,
        userAgent: req.headers["user-agent"] ?? null,
        ip: hashIp(rawIp),
      },
      answers,
    };

    // ── Persist to disk ─────────────────────────────────────────────────────
    const filename = `${fileTimestamp(submittedAt)}_${id}.json`;
    const filePath = join(DATA_DIR, filename);

    await writeAtomic(filePath, JSON.stringify(record, null, 2));

    console.log(`Survey submission saved: ${filename}`);
    res.status(201).json({ message: "Survey submitted successfully" });
  } catch (error) {
    console.error("Error processing survey submission:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(
    `Survey server listening on port ${port} — data dir: ${DATA_DIR}`,
  );
});

export default app;
