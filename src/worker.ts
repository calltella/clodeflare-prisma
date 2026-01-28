import { handleUsers } from "../routes/users";

import type { Env } from "../types/env";

import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const app = new Hono<{ Bindings: Env }>()

// ミドルウェア
app.use('*', logger())
app.use('*', cors())

// ルートエンドポイント
app.get('/', (c) => {
  return c.json({ 
    message: 'Hono + Prisma + D1 API',
    endpoints: {
      notes: '/notes',
      posts: '/posts'
    }
  })
})

app.route("/notes", handleUsers);

export default app;