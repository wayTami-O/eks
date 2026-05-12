/** Обёртка над $fetch: база из `useApiBase`, JWT в заголовке для запросов из браузера/SSR. */
export function useApi() {
  const resolveBase = useApiBase();
  const { token } = useAuth();

  async function api<T>(
    path: string,
    opts: NonNullable<Parameters<typeof $fetch>[1]> = {},
  ) {
    const extra = (opts?.headers ?? {}) as Record<string, string>;
    return $fetch<T>(`${resolveBase()}${path}`, {
      ...opts,
      headers: {
        ...extra,
        ...(token.value ? { Authorization: `Bearer ${token.value}` } : {}),
      },
    });
  }

  return { api };
}
