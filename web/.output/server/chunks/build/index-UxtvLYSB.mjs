import { defineComponent, ref, watch, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useLabels } from './useLabels-Cidp0rTx.mjs';
import { u as useApi } from './useApi-C8FYqZZ9.mjs';
import { _ as _export_sfc, a as useToast } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { paymentLabel, statusLabel } = useLabels();
    const { api } = useApi();
    const toast = useToast();
    const applications = ref([]);
    const page = ref(1);
    const limit = ref(8);
    const total = ref(0);
    const totalPages = ref(1);
    const filterStatus = ref("");
    const pending = ref(true);
    const updating = ref(null);
    async function load() {
      pending.value = true;
      try {
        const q = {
          page: String(page.value),
          limit: String(limit.value)
        };
        if (filterStatus.value) q.status = filterStatus.value;
        const res = await api("/api/admin/applications", { query: q });
        applications.value = res.applications;
        total.value = res.total;
        totalPages.value = res.totalPages;
        page.value = res.page;
      } catch {
        toast.push("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438", "error");
      } finally {
        pending.value = false;
      }
    }
    watch([page, filterStatus], () => {
      void load();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-01c331a3><h1 style="${ssrRenderStyle({ "margin": "0 0 1rem", "font-size": "1.35rem" })}" data-v-01c331a3> \u041F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 </h1><div class="toolbar card" style="${ssrRenderStyle({ "margin-bottom": "1rem", "padding": "1rem" })}" data-v-01c331a3><div style="${ssrRenderStyle({ "display": "flex", "gap": "0.75rem", "flex-wrap": "wrap", "align-items": "center" })}" data-v-01c331a3><label style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "0.25rem", "font-size": "0.85rem", "color": "var(--muted)" })}" data-v-01c331a3> \u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0443 <select class="filter-select" data-v-01c331a3><option value="" data-v-01c331a3${ssrIncludeBooleanAttr(Array.isArray(unref(filterStatus)) ? ssrLooseContain(unref(filterStatus), "") : ssrLooseEqual(unref(filterStatus), "")) ? " selected" : ""}> \u0412\u0441\u0435 </option><option value="NEW" data-v-01c331a3${ssrIncludeBooleanAttr(Array.isArray(unref(filterStatus)) ? ssrLooseContain(unref(filterStatus), "NEW") : ssrLooseEqual(unref(filterStatus), "NEW")) ? " selected" : ""}> \u041D\u043E\u0432\u0430\u044F </option><option value="IN_PROGRESS" data-v-01c331a3${ssrIncludeBooleanAttr(Array.isArray(unref(filterStatus)) ? ssrLooseContain(unref(filterStatus), "IN_PROGRESS") : ssrLooseEqual(unref(filterStatus), "IN_PROGRESS")) ? " selected" : ""}> \u0418\u0434\u0451\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 </option><option value="COMPLETED" data-v-01c331a3${ssrIncludeBooleanAttr(Array.isArray(unref(filterStatus)) ? ssrLooseContain(unref(filterStatus), "COMPLETED") : ssrLooseEqual(unref(filterStatus), "COMPLETED")) ? " selected" : ""}> \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E </option></select></label><span class="pill" data-v-01c331a3>\u0412\u0441\u0435\u0433\u043E: ${ssrInterpolate(unref(total))}</span></div></div>`);
      if (unref(pending)) {
        _push(`<p data-v-01c331a3> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026 </p>`);
      } else {
        _push(`<div class="table-wrap card" style="${ssrRenderStyle({ "padding": "0", "overflow": "hidden" })}" data-v-01c331a3><table class="tbl" data-v-01c331a3><thead data-v-01c331a3><tr data-v-01c331a3><th data-v-01c331a3>\u0421\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u044C</th><th data-v-01c331a3>\u041A\u0443\u0440\u0441</th><th data-v-01c331a3>\u0421\u0442\u0430\u0440\u0442</th><th data-v-01c331a3>\u041E\u043F\u043B\u0430\u0442\u0430</th><th data-v-01c331a3>\u0421\u0442\u0430\u0442\u0443\u0441</th><th data-v-01c331a3>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435</th></tr></thead><tbody data-v-01c331a3><!--[-->`);
        ssrRenderList(unref(applications), (a) => {
          var _a, _b, _c;
          _push(`<tr data-v-01c331a3><td data-v-01c331a3><div style="${ssrRenderStyle({ "font-weight": "600" })}" data-v-01c331a3>${ssrInterpolate((_a = a.user) == null ? void 0 : _a.fullName)}</div><div style="${ssrRenderStyle({ "font-size": "0.85rem", "color": "var(--muted)" })}" data-v-01c331a3>${ssrInterpolate((_b = a.user) == null ? void 0 : _b.login)} \xB7 ${ssrInterpolate((_c = a.user) == null ? void 0 : _c.email)}</div></td><td data-v-01c331a3>${ssrInterpolate(a.courseTitle)}</td><td data-v-01c331a3>${ssrInterpolate(a.startDate)}</td><td data-v-01c331a3>${ssrInterpolate(unref(paymentLabel)(a.paymentMethod))}</td><td data-v-01c331a3><span class="tag" data-v-01c331a3>${ssrInterpolate(unref(statusLabel)(a.status))}</span>`);
          if (a.review) {
            _push(`<div style="${ssrRenderStyle({ "margin-top": "0.35rem", "font-size": "0.8rem", "color": "var(--muted)" })}" data-v-01c331a3> \u0415\u0441\u0442\u044C \u043E\u0442\u0437\u044B\u0432 </div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td data-v-01c331a3><select class="mini-select"${ssrRenderAttr("value", a.status === "NEW" ? "" : a.status)}${ssrIncludeBooleanAttr(unref(updating) === a.id) ? " disabled" : ""} data-v-01c331a3><option value="" disabled data-v-01c331a3>${ssrInterpolate(a.status === "NEW" ? "\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441\u2026" : "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441\u2026")}</option><option value="IN_PROGRESS" data-v-01c331a3> \u0418\u0434\u0451\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 </option><option value="COMPLETED" data-v-01c331a3> \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E </option></select></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      if (!unref(pending) && unref(totalPages) > 1) {
        _push(`<div class="pager" data-v-01c331a3><button type="button" class="btn btn-ghost"${ssrIncludeBooleanAttr(unref(page) <= 1) ? " disabled" : ""} data-v-01c331a3> \u041D\u0430\u0437\u0430\u0434 </button><span class="pill" data-v-01c331a3>\u0421\u0442\u0440. ${ssrInterpolate(unref(page))} / ${ssrInterpolate(unref(totalPages))}</span><button type="button" class="btn btn-ghost"${ssrIncludeBooleanAttr(unref(page) >= unref(totalPages)) ? " disabled" : ""} data-v-01c331a3> \u0412\u043F\u0435\u0440\u0451\u0434 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-01c331a3"]]);

export { index as default };
//# sourceMappingURL=index-UxtvLYSB.mjs.map
