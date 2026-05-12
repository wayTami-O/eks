import { _ as __nuxt_component_0 } from './nuxt-link-D2-iP1B0.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useAuth } from './useAuth-BGCrChQp.mjs';
import { a as useToast } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useAuth();
    useToast();
    const login = ref("");
    const password = ref("");
    const pending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card",
        style: { "max-width": "460px", "margin": "0 auto" }
      }, _attrs))}><h1 style="${ssrRenderStyle({ "margin": "0 0 0.35rem", "font-size": "1.35rem" })}"> \u0412\u0445\u043E\u0434 </h1><p style="${ssrRenderStyle({ "margin": "0 0 1rem", "color": "var(--muted)" })}"> \u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u043B\u043E\u0433\u0438\u043D\u0443 \u0438 \u043F\u0430\u0440\u043E\u043B\u044E. `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/register" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0415\u0449\u0451 \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B? \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F`);
          } else {
            return [
              createTextVNode("\u0415\u0449\u0451 \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B? \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><form><div class="field"><label for="login">\u041B\u043E\u0433\u0438\u043D</label><input id="login"${ssrRenderAttr("value", unref(login))} name="login" autocomplete="username" required></div><div class="field"><label for="password">\u041F\u0430\u0440\u043E\u043B\u044C</label><input id="password"${ssrRenderAttr("value", unref(password))} type="password" name="password" autocomplete="current-password" required></div><button type="submit" class="btn btn-primary" style="${ssrRenderStyle({ "width": "100%" })}"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""}> \u0412\u043E\u0439\u0442\u0438 </button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-CQQmjsS_.mjs.map
