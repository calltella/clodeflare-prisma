"use server";
export const dynamic = "force-dynamic";

import { apiFetch } from "@/lib/api";
import { revalidatePath } from "next/cache";

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

/**
 * ノート一覧取得（GET /api/notes）
 */
export async function getNotes(): Promise<Note[]> {
  const res = await apiFetch("/api/notes");

  if (!res.ok) {
    throw new Error("ノートの取得に失敗しました");
  }

  return res.json();
}

export async function createNote(formData: FormData): Promise<void> {
  const title = formData.get("title");
  const content = formData.get("content");

  if (typeof title !== "string" || typeof content !== "string") {
    throw new Error("Invalid form data");
  }

  if (!title.trim()) {
    throw new Error("Title is required");
  }
  await apiFetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content: typeof content === "string" ? content : "",
    }),
  });
  revalidatePath("/notes");
}
