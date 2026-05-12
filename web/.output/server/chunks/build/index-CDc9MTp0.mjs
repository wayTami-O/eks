import { defineComponent, unref, withCtx, createTextVNode, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-D2-iP1B0.mjs';
import { u as useAuth } from './useAuth-BGCrChQp.mjs';
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

const src = "https://picsum.photos/seed/korochki-slide/960/520";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeroSlider",
  __ssrInlineRender: true,
  props: {
    intervalMs: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    (_a = props.intervalMs) != null ? _a : 3e3;
    const slides = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      src,
      alt: "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u2014 \u0438\u043B\u043B\u044E\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
    }));
    const index = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "slider",
        "aria-roledescription": "carousel"
      }, _attrs))} data-v-2f89f18b><div class="slider-viewport" data-v-2f89f18b><img class="slider-img"${ssrRenderAttr("src", unref(slides)[unref(index)].src)}${ssrRenderAttr("alt", unref(slides)[unref(index)].alt)} loading="lazy" decoding="async" width="960" height="520" data-v-2f89f18b><div class="slider-overlay" data-v-2f89f18b><p class="slider-kicker" data-v-2f89f18b> \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 </p><h1 class="slider-title" data-v-2f89f18b> \u041A\u043E\u0440\u043E\u0447\u043A\u0438.\u0435\u0441\u0442\u044C </h1><p class="slider-sub" data-v-2f89f18b> \u0417\u0430\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u043D\u043B\u0430\u0439\u043D\u2011\u043A\u0443\u0440\u0441 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0446\u0430. </p></div><div class="slider-controls" data-v-2f89f18b><button type="button" class="slider-btn" aria-label="\u041D\u0430\u0437\u0430\u0434" data-v-2f89f18b> \u2039 </button><div class="slider-dots" role="tablist" data-v-2f89f18b><!--[-->`);
      ssrRenderList(unref(slides), (s, i) => {
        _push(`<button type="button" class="${ssrRenderClass([{ active: i === unref(index) }, "dot"])}"${ssrRenderAttr("aria-selected", i === unref(index))}${ssrRenderAttr("aria-label", `\u0421\u043B\u0430\u0439\u0434 ${i + 1}`)} data-v-2f89f18b></button>`);
      });
      _push(`<!--]--></div><button type="button" class="slider-btn" aria-label="\u0412\u043F\u0435\u0440\u0451\u0434" data-v-2f89f18b> \u203A </button></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2f89f18b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSlider = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HeroSlider, { "interval-ms": 3e3 }, null, _parent));
      _push(`<section class="grid-2"><div class="card"><p class="tag"> \u041C\u043E\u0434\u0443\u043B\u044C \u0437\u0430\u043F\u0438\u0441\u0438 </p><h2 style="${ssrRenderStyle({ "margin": "0.5rem 0 0.35rem" })}"> \u041E\u043D\u043B\u0430\u0439\u043D\u2011\u043A\u0443\u0440\u0441\u044B \u0414\u041F\u041E </h2><p style="${ssrRenderStyle({ "margin": "0", "color": "var(--muted)", "line-height": "1.55" })}"> \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0441\u0442\u0430\u0440\u0442\u0430 \u0438 \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B \u2014 \u0437\u0430\u044F\u0432\u043A\u0430 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u0441\u0442\u0430\u0442\u0443\u0441 \xAB\u041D\u043E\u0432\u0430\u044F\xBB, \u0430 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435. </p><div style="${ssrRenderStyle({ "margin-top": "1rem", "display": "flex", "gap": "0.5rem", "flex-wrap": "wrap" })}">`);
      if (unref(user)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/applications/new",
          class: "btn btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 `);
            } else {
              return [
                createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/register",
          class: "btn btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 `);
            } else {
              return [
                createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "btn btn-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 `);
          } else {
            return [
              createTextVNode(" \u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card"><p class="tag"> \u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 </p><h2 style="${ssrRenderStyle({ "margin": "0.5rem 0 0.35rem" })}"> \u041E\u0442\u0437\u044B\u0432\u044B \u043E \u043A\u0443\u0440\u0441\u0430\u0445 </h2><p style="${ssrRenderStyle({ "margin": "0", "color": "var(--muted)", "line-height": "1.55" })}"> \u0412 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u0437\u0430\u044F\u0432\u043E\u043A \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u043E\u0442\u0437\u044B\u0432 \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435. </p><div style="${ssrRenderStyle({ "margin-top": "1rem" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/applications",
        class: "btn btn-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0437\u0430\u044F\u0432\u043A\u0430\u043C `);
          } else {
            return [
              createTextVNode(" \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0437\u0430\u044F\u0432\u043A\u0430\u043C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CDc9MTp0.mjs.map
