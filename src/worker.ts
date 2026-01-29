// /app/src/worker.ts

import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import type { Env } from "../types/env";

import { handleNotes } from "../routes/notes";

const app = new Hono<{ Bindings: Env }>();

// ミドルウェア
app.use("*", logger());
app.use("*", cors());

// ルートエンドポイント
app.get("/", (c) => {
  return c.json({
    message: "Hono + Prisma + D1 API",
    endpoints: {
      notes: "/notes",
      posts: "/posts",
    },
  });
});

app.route("/notes", handleNotes);

export default app;
