import { _ as __nuxt_component_0 } from "./nuxt-link-D2-iP1B0.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { u as useAuth } from "./useAuth-BGCrChQp.js";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ufo/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/defu/dist/defu.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/cookie-es/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/h3/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/destr/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ohash/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/klona/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "topbar" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "brand"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Корочки<span style="${ssrRenderStyle({ "color": "var(--accent)" })}"${_scopeId}>.есть</span>`);
          } else {
            return [
              createTextVNode(" Корочки"),
              createVNode("span", { style: { "color": "var(--accent)" } }, ".есть")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="nav" aria-label="Основное меню">`);
      if (unref(user)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/applications",
          class: "btn btn-ghost"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Мои заявки `);
            } else {
              return [
                createTextVNode(" Мои заявки ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(user)?.role === "ADMIN") {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin",
          class: "btn btn-ghost"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Админ `);
            } else {
              return [
                createTextVNode(" Админ ")
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
              _push2(` Вход `);
            } else {
              return [
                createTextVNode(" Вход ")
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
              _push2(` Регистрация `);
            } else {
              return [
                createTextVNode(" Регистрация ")
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
        _push(`<button type="button" class="btn btn-ghost"> Выход </button>`);
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
export {
  _default as default
};
//# sourceMappingURL=default-DRMwrpz5.js.map
