/** База URL API: в браузере — публичный хост, на сервере Nuxt в Docker — внутреннее имя сервиса. */
export function useApiBase() {
  const config = useRuntimeConfig();

  return function resolveApiBase(): string {
    const pub = String(config.public.apiBase ?? "").replace(/\/$/, "");
    if (import.meta.server && config.apiInternal) {
      return String(config.apiInternal).replace(/\/$/, "");
    }
    return pub;
  };
}
