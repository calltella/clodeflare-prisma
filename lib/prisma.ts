import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

export function createPrisma(db: D1Database) {
  return new PrismaClient({
    adapter: new PrismaD1(db),
  });
}
