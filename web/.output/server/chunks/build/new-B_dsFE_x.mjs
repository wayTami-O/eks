import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { u as useApi } from './useApi-C8FYqZZ9.mjs';
import { a as useToast } from './server.mjs';
import './useAuth-BGCrChQp.mjs';
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
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    useApi();
    useToast();
    const courseHints = ref([]);
    const courseTitle = ref("");
    const startDate = ref("");
    const paymentMethod = ref("CASH");
    const pending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card",
        style: { "max-width": "560px", "margin": "0 auto" }
      }, _attrs))}><h1 style="${ssrRenderStyle({ "margin": "0 0 0.35rem", "font-size": "1.35rem" })}"> \u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430 </h1><p style="${ssrRenderStyle({ "margin": "0 0 1rem", "color": "var(--muted)" })}"> \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430 (\u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \u0438\u043B\u0438 \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u0432\u043E\u0451). \u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u2014 \u0444\u043E\u0440\u043C\u0430\u0442 <strong>\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413</strong>. </p><form><div class="field"><label for="course">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430</label><input id="course"${ssrRenderAttr("value", unref(courseTitle))} type="text" list="course-hints" maxlength="200" autocomplete="off" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041E\u0441\u043D\u043E\u0432\u044B \u0432\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0430" required><datalist id="course-hints"><!--[-->`);
      ssrRenderList(unref(courseHints), (c) => {
        _push(`<option${ssrRenderAttr("value", c)}></option>`);
      });
      _push(`<!--]--></datalist></div><div class="field"><label for="start">\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F</label><input id="start"${ssrRenderAttr("value", unref(startDate))} placeholder="12.05.2026" required></div><div class="field"><span style="${ssrRenderStyle({ "font-size": "0.85rem", "color": "var(--muted)" })}">\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B</span><div style="${ssrRenderStyle({ "display": "flex", "gap": "0.75rem", "flex-wrap": "wrap", "margin-top": "0.35rem" })}"><label class="pill" style="${ssrRenderStyle({ "cursor": "pointer", "display": "inline-flex", "gap": "0.35rem", "align-items": "center" })}"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(paymentMethod), "CASH")) ? " checked" : ""} type="radio" value="CASH" name="pay"> \u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438 </label><label class="pill" style="${ssrRenderStyle({ "cursor": "pointer", "display": "inline-flex", "gap": "0.35rem", "align-items": "center" })}"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(paymentMethod), "PHONE_TRANSFER")) ? " checked" : ""} type="radio" value="PHONE_TRANSFER" name="pay"> \u041F\u0435\u0440\u0435\u0432\u043E\u0434\u043E\u043C \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 </label></div></div><button type="submit" class="btn btn-primary" style="${ssrRenderStyle({ "width": "100%" })}"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""}> \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C </button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/applications/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=new-B_dsFE_x.mjs.map
