const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export type ApiOptions = {
  token?: string | null;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
};

export async function apiFetch<T>(path: string, options: ApiOptions = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: options.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: "no-store",
  });

  if (!response.ok) {
    const raw = await response.text();
    let message = raw || `API request failed: ${response.status}`;
    try {
      const parsed = JSON.parse(raw) as { detail?: string };
      if (parsed?.detail) message = parsed.detail;
    } catch {
      // keep raw text
    }
    throw new Error(message);
  }

  return response.json() as Promise<T>;
}
