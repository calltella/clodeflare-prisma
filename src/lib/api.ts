// src/lib/api.ts
// API を叩くページは「必ず dynamic」
export const dynamic = "force-dynamic";

export function apiFetch(path: string, init?: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
  }

  return fetch(`${baseUrl}${path}`, {
    ...init,
    cache: "no-store",
  });
}
