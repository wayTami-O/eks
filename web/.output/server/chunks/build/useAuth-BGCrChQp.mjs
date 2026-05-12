import { h as useState, c as useNuxtApp, f as useRuntimeConfig } from './server.mjs';
import { ref } from 'vue';
import { t as klona, v as parse, x as getRequestHeader, y as destr, z as isEqual, A as setCookie, B as getCookie, C as deleteCookie } from '../nitro/nitro.mjs';

function useApiBase() {
  const config = useRuntimeConfig();
  return function resolveApiBase() {
    var _a;
    const pub = String((_a = config.public.apiBase) != null ? _a : "").replace(/\/$/, "");
    if (config.apiInternal) {
      return String(config.apiInternal).replace(/\/$/, "");
    }
    return pub;
  };
}
function useRequestEvent(nuxtApp) {
  var _a;
  nuxtApp || (nuxtApp = useNuxtApp());
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => {
    const decoded = decodeURIComponent(val);
    const parsed = destr(decoded);
    if (typeof parsed === "number" && (!Number.isFinite(parsed) || String(parsed) !== decoded)) {
      return decoded;
    }
    return parsed;
  },
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a, _b, _c;
  const opts = { ...CookieDefaults, ..._opts };
  (_a = opts.filter) != null ? _a : opts.filter = (key) => key === name;
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : (_c = cookies[name]) != null ? _c : (_b = opts.default) == null ? void 0 : _b.call(opts));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
function useAuth() {
  const resolveBase = useApiBase();
  const token = useCookie("korochki_token", {
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax"
  });
  const user = useState("auth-user", () => null);
  async function refreshMe() {
    if (!token.value) {
      user.value = null;
      return;
    }
    try {
      const res = await $fetch(
        `${resolveBase()}/api/me`,
        {
          headers: { Authorization: `Bearer ${token.value}` }
        }
      );
      user.value = res.ok && res.user ? res.user : null;
      if (!user.value) token.value = null;
    } catch {
      token.value = null;
      user.value = null;
    }
  }
  function setSession(newToken, u) {
    token.value = newToken;
    user.value = u;
  }
  function logout() {
    token.value = null;
    user.value = null;
  }
  return {
    token,
    user,
    refreshMe,
    setSession,
    logout
  };
}

export { useApiBase as a, useAuth as u };
//# sourceMappingURL=useAuth-BGCrChQp.mjs.map
