import { u as useAuth, a as useApiBase } from './useAuth-BGCrChQp.mjs';

function useApi() {
  const resolveBase = useApiBase();
  const { token } = useAuth();
  async function api(path, opts = {}) {
    var _a;
    const extra = (_a = opts == null ? void 0 : opts.headers) != null ? _a : {};
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

export { useApi as u };
//# sourceMappingURL=useApi-C8FYqZZ9.mjs.map
