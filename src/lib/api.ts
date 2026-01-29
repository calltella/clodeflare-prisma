// src/lib/api.ts
export function apiFetch(path: string, init?: RequestInit) {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!base) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
  }

  return fetch(`${base}${path}`, {
    ...init,
    cache: "no-store",
  });
}
