import { _ as __nuxt_component_0 } from './nuxt-link-D2-iP1B0.mjs';
import { defineComponent, ref, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useLabels } from './useLabels-Cidp0rTx.mjs';
import { u as useApi } from './useApi-C8FYqZZ9.mjs';
import { _ as _export_sfc, a as useToast } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './useAuth-BGCrChQp.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { paymentLabel, statusLabel } = useLabels();
    useApi();
    useToast();
    const items = ref([]);
    const pending = ref(true);
    const reviewText = ref({});
    const reviewPending = ref({});
    function submittedAt(iso) {
      const d = new Date(iso);
      if (Number.isNaN(d.getTime())) return "\u2014";
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const yyyy = d.getFullYear();
      const hh = String(d.getHours()).padStart(2, "0");
      const mi = String(d.getMinutes()).padStart(2, "0");
      return `${dd}.${mm}.${yyyy}, ${hh}:${mi}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1823df28><div class="apps-head" data-v-1823df28><div data-v-1823df28><h1 style="${ssrRenderStyle({ "margin": "0", "font-size": "1.35rem" })}" data-v-1823df28> \u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 </h1><p style="${ssrRenderStyle({ "margin": "0.35rem 0 0", "color": "var(--muted)" })}" data-v-1823df28> \u0414\u0430\u0442\u0430 \u043F\u043E\u0434\u0430\u0447\u0438 \u2014 \u043A\u043E\u0433\u0434\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435. </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/applications/new",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430 `);
          } else {
            return [
              createTextVNode(" \u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(pending)) {
        _push(`<p data-v-1823df28> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026 </p>`);
      } else if (unref(items).length === 0) {
        _push(`<div class="card" data-v-1823df28> \u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0437\u0430\u044F\u0432\u043E\u043A. `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/applications/new",
          style: { "margin-left": "0.35rem" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
            } else {
              return [
                createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="card table-wrap" style="${ssrRenderStyle({ "padding": "0", "overflow": "hidden" })}" data-v-1823df28><table class="apps-table" data-v-1823df28><thead data-v-1823df28><tr data-v-1823df28><th data-v-1823df28>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430</th><th data-v-1823df28>\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430</th><th data-v-1823df28>\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B</th><th data-v-1823df28>\u0421\u0442\u0430\u0442\u0443\u0441</th><th data-v-1823df28>\u0414\u0430\u0442\u0430 \u043F\u043E\u0434\u0430\u0447\u0438</th><th data-v-1823df28>\u041E\u0442\u0437\u044B\u0432</th></tr></thead><tbody data-v-1823df28><!--[-->`);
        ssrRenderList(unref(items), (a) => {
          _push(`<tr data-v-1823df28><td data-label="\u041A\u0443\u0440\u0441" data-v-1823df28>${ssrInterpolate(a.courseTitle)}</td><td data-label="\u0421\u0442\u0430\u0440\u0442" data-v-1823df28>${ssrInterpolate(a.startDate)}</td><td data-label="\u041E\u043F\u043B\u0430\u0442\u0430" data-v-1823df28>${ssrInterpolate(unref(paymentLabel)(a.paymentMethod))}</td><td data-label="\u0421\u0442\u0430\u0442\u0443\u0441" data-v-1823df28><span class="tag" data-v-1823df28>${ssrInterpolate(unref(statusLabel)(a.status))}</span></td><td data-label="\u041F\u043E\u0434\u0430\u0447\u0430" data-v-1823df28>${ssrInterpolate(submittedAt(a.createdAt))}</td><td class="apps-review-cell" data-label="\u041E\u0442\u0437\u044B\u0432" data-v-1823df28>`);
          if (a.review) {
            _push(`<p class="review-quote" data-v-1823df28>${ssrInterpolate(a.review.content)}</p>`);
          } else {
            _push(`<!--[--><label class="field" style="${ssrRenderStyle({ "margin": "0" })}" data-v-1823df28><textarea rows="2" placeholder="\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430" data-v-1823df28>${ssrInterpolate(unref(reviewText)[a.id])}</textarea></label><button type="button" class="btn btn-primary" style="${ssrRenderStyle({ "margin-top": "0.35rem", "width": "100%" })}"${ssrIncludeBooleanAttr(unref(reviewPending)[a.id]) ? " disabled" : ""} data-v-1823df28> \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432 </button><!--]-->`);
          }
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/applications/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1823df28"]]);

export { index as default };
//# sourceMappingURL=index-DufQ8gQj.mjs.map
