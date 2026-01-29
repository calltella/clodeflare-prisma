import { Hono } from "hono";
import { createPrisma } from "../lib/prisma";
import type { Env } from "../types/env";

export const handleNotes = new Hono<{ Bindings: Env }>();

handleNotes.get("/", async (c) => {
  console.log("Fetching notes...");
  const prisma = createPrisma(c.env.DB);
  const notes = await prisma.note.findMany();
  return c.json(notes);
});

handleNotes.post("/", async (c) => {
  const prisma = createPrisma(c.env.DB);
  const body = await c.req.json();
  const note = await prisma.note.create({ data: body });
  return c.json(note, 201);
});
