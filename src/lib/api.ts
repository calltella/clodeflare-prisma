export function apiFetch(path: string, init?: RequestInit) {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`, {
    ...init,
    cache: "no-store",
  });
}
