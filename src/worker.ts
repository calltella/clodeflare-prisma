// /app/src/worker.ts

// ここはWalkerルーティングの場所
// リクエストの流れ（ブラウザ → Cloudflare Workers（Hono） → Next.js（App Router））

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
      notes: "/notes", // ルーティングの説明みたいなもの
      posts: "/posts",
    },
  });
});

app.get("/api/health", (c) => c.json({ ok: true }));

app.route("/api/notes", handleNotes);

// どこにもルーティングされない場合は Next.jsに渡す
app.all("*", (c) => fetch(c.req.raw));

export default app;
