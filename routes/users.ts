import { Hono } from "hono";
import { createPrisma } from "../lib/prisma";

export const notes = new Hono();

notes.get("/", async c => {
  const prisma = createPrisma(c.env.DB);
  const notes = await prisma.note.findMany();
  return c.json(notes);
});

notes.post("/", async c => {
  const prisma = createPrisma(c.env.DB);
  const body = await c.req.json();
  const note = await prisma.note.create({ data: body });
  return c.json(note, 201);
});
