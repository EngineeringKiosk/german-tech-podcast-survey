import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const port = parseInt(process.env.PORT || "3001", 10);

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

// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Survey submission endpoint
app.post("/api/survey", async (req: Request, res: Response) => {
  try {
    const answers = req.body;

    if (!answers || typeof answers !== "object") {
      res.status(400).json({ error: "Invalid survey data" });
      return;
    }

    // TODO: persist survey answers (e.g. write to a database or file)
    console.log(
      "Survey submission received:",
      JSON.stringify(answers, null, 2),
    );

    res.status(201).json({ message: "Survey submitted successfully" });
  } catch (error) {
    console.error("Error processing survey submission:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Survey server listening on port ${port}`);
});

export default app;
