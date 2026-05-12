import { u as useAuth, a as useApiBase } from "./useAuth-BGCrChQp.js";
function useApi() {
  const resolveBase = useApiBase();
  const { token } = useAuth();
  async function api(path, opts = {}) {
    const extra = opts?.headers ?? {};
    return $fetch(`${resolveBase()}${path}`, {
      ...opts,
      headers: {
        ...extra,
        ...token.value ? { Authorization: `Bearer ${token.value}` } : {}
      }
    });
  }
  return { api };
}
export {
  useApi as u
};
//# sourceMappingURL=useApi-C8FYqZZ9.js.map
