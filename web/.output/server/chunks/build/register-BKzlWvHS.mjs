import { _ as __nuxt_component_0 } from './nuxt-link-D2-iP1B0.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    const login = ref("");
    const password = ref("");
    const fullName = ref("");
    const phone = ref("");
    const email = ref("");
    const errors = ref({});
    const pending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card",
        style: { "max-width": "520px", "margin": "0 auto" }
      }, _attrs))}><h1 style="${ssrRenderStyle({ "margin": "0 0 0.35rem", "font-size": "1.35rem" })}"> \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F </h1><p style="${ssrRenderStyle({ "margin": "0 0 1rem", "color": "var(--muted)" })}"> \u0412\u0441\u0435 \u043F\u043E\u043B\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B. `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B? \u0412\u043E\u0439\u0442\u0438`);
          } else {
            return [
              createTextVNode("\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B? \u0412\u043E\u0439\u0442\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><form><div class="field"><label for="login">\u041B\u043E\u0433\u0438\u043D</label><input id="login"${ssrRenderAttr("value", unref(login))} autocomplete="username" required>`);
      if (unref(errors).login) {
        _push(`<p class="field-error">${ssrInterpolate(unref(errors).login)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="field"><label for="password">\u041F\u0430\u0440\u043E\u043B\u044C</label><input id="password"${ssrRenderAttr("value", unref(password))} type="password" autocomplete="new-password" required>`);
      if (unref(errors).password) {
        _push(`<p class="field-error">${ssrInterpolate(unref(errors).password)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="field"><label for="fullName">\u0424\u0418\u041E</label><input id="fullName"${ssrRenderAttr("value", unref(fullName))} autocomplete="name" required>`);
      if (unref(errors).fullName) {
        _push(`<p class="field-error">${ssrInterpolate(unref(errors).fullName)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="field"><label for="phone">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label><input id="phone"${ssrRenderAttr("value", unref(phone))} placeholder="8(999)123-45-67" inputmode="numeric" required>`);
      if (unref(errors).phone) {
        _push(`<p class="field-error">${ssrInterpolate(unref(errors).phone)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="field"><label for="email">Email</label><input id="email"${ssrRenderAttr("value", unref(email))} type="email" autocomplete="email" required>`);
      if (unref(errors).email) {
        _push(`<p class="field-error">${ssrInterpolate(unref(errors).email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="btn btn-primary" style="${ssrRenderStyle({ "width": "100%" })}"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""}> \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F </button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-BKzlWvHS.mjs.map
