import { _ as __nuxt_component_0 } from './nuxt-link-D2-iP1B0.mjs';
import { mergeProps, defineComponent, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuth } from './useAuth-BGCrChQp.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "topbar" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "brand"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041A\u043E\u0440\u043E\u0447\u043A\u0438<span style="${ssrRenderStyle({ "color": "var(--accent)" })}"${_scopeId}>.\u0435\u0441\u0442\u044C</span>`);
          } else {
            return [
              createTextVNode(" \u041A\u043E\u0440\u043E\u0447\u043A\u0438"),
              createVNode("span", { style: { "color": "var(--accent)" } }, ".\u0435\u0441\u0442\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="nav" aria-label="\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E">`);
      if (unref(user)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/applications",
          class: "btn btn-ghost"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 `);
            } else {
              return [
                createTextVNode(" \u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (((_a = unref(user)) == null ? void 0 : _a.role) === "ADMIN") {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin",
          class: "btn btn-ghost"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0410\u0434\u043C\u0438\u043D `);
            } else {
              return [
                createTextVNode(" \u0410\u0434\u043C\u0438\u043D ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(user)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "btn btn-ghost"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0412\u0445\u043E\u0434 `);
            } else {
              return [
                createTextVNode(" \u0412\u0445\u043E\u0434 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(user)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/register",
          class: "btn btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F `);
            } else {
              return [
                createTextVNode(" \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(user)) {
        _push(`<span class="pill">${ssrInterpolate(unref(user).fullName)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(user)) {
        _push(`<button type="button" class="btn btn-ghost"> \u0412\u044B\u0445\u043E\u0434 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "shell" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DRMwrpz5.mjs.map
