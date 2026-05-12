import { defineComponent, ref, watch, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useLabels } from "./useLabels-Cidp0rTx.js";
import { u as useApi } from "./useApi-C8FYqZZ9.js";
import { a as useToast, _ as _export_sfc } from "../server.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/hookable/dist/index.mjs";
import "./useAuth-BGCrChQp.js";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/cookie-es/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/h3/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/destr/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ohash/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/klona/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/defu/dist/defu.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ufo/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/@unhead/vue/dist/index.mjs";
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
        toast.push("Не удалось загрузить заявки", "error");
      } finally {
        pending.value = false;
      }
    }
    watch([page, filterStatus], () => {
      void load();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-01c331a3><h1 style="${ssrRenderStyle({ "margin": "0 0 1rem", "font-size": "1.35rem" })}" data-v-01c331a3> Панель администратора </h1><div class="toolbar card" style="${ssrRenderStyle({ "margin-bottom": "1rem", "padding": "1rem" })}" data-v-01c331a3><div style="${ssrRenderStyle({ "display": "flex", "gap": "0.75rem", "flex-wrap": "wrap", "align-items": "center" })}" data-v-01c331a3><label style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "0.25rem", "font-size": "0.85rem", "color": "var(--muted)" })}" data-v-01c331a3> Фильтр по статусу <select class="filter-select" data-v-01c331a3><option value="" data-v-01c331a3${ssrIncludeBooleanAttr(Array.isArray(unref(filterStatus)) ? ssrLooseContain(unref(filterStatus), "") : ssrLooseEqual(unref(filterStatus), "")) ? " selected" : ""}> Все </option><option value="NEW" data-v-01c331a3${ssrIncludeBooleanAttr(Array.isArray(unref(filterStatus)) ? ssrLooseContain(unref(filterStatus), "NEW") : ssrLooseEqual(unref(filterStatus), "NEW")) ? " selected" : ""}> Новая </option><option value="IN_PROGRESS" data-v-01c331a3${ssrIncludeBooleanAttr(Array.isArray(unref(filterStatus)) ? ssrLooseContain(unref(filterStatus), "IN_PROGRESS") : ssrLooseEqual(unref(filterStatus), "IN_PROGRESS")) ? " selected" : ""}> Идёт обучение </option><option value="COMPLETED" data-v-01c331a3${ssrIncludeBooleanAttr(Array.isArray(unref(filterStatus)) ? ssrLooseContain(unref(filterStatus), "COMPLETED") : ssrLooseEqual(unref(filterStatus), "COMPLETED")) ? " selected" : ""}> Обучение завершено </option></select></label><span class="pill" data-v-01c331a3>Всего: ${ssrInterpolate(unref(total))}</span></div></div>`);
      if (unref(pending)) {
        _push(`<p data-v-01c331a3> Загрузка… </p>`);
      } else {
        _push(`<div class="table-wrap card" style="${ssrRenderStyle({ "padding": "0", "overflow": "hidden" })}" data-v-01c331a3><table class="tbl" data-v-01c331a3><thead data-v-01c331a3><tr data-v-01c331a3><th data-v-01c331a3>Слушатель</th><th data-v-01c331a3>Курс</th><th data-v-01c331a3>Старт</th><th data-v-01c331a3>Оплата</th><th data-v-01c331a3>Статус</th><th data-v-01c331a3>Действие</th></tr></thead><tbody data-v-01c331a3><!--[-->`);
        ssrRenderList(unref(applications), (a) => {
          _push(`<tr data-v-01c331a3><td data-v-01c331a3><div style="${ssrRenderStyle({ "font-weight": "600" })}" data-v-01c331a3>${ssrInterpolate(a.user?.fullName)}</div><div style="${ssrRenderStyle({ "font-size": "0.85rem", "color": "var(--muted)" })}" data-v-01c331a3>${ssrInterpolate(a.user?.login)} · ${ssrInterpolate(a.user?.email)}</div></td><td data-v-01c331a3>${ssrInterpolate(a.courseTitle)}</td><td data-v-01c331a3>${ssrInterpolate(a.startDate)}</td><td data-v-01c331a3>${ssrInterpolate(unref(paymentLabel)(a.paymentMethod))}</td><td data-v-01c331a3><span class="tag" data-v-01c331a3>${ssrInterpolate(unref(statusLabel)(a.status))}</span>`);
          if (a.review) {
            _push(`<div style="${ssrRenderStyle({ "margin-top": "0.35rem", "font-size": "0.8rem", "color": "var(--muted)" })}" data-v-01c331a3> Есть отзыв </div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td data-v-01c331a3><select class="mini-select"${ssrRenderAttr("value", a.status === "NEW" ? "" : a.status)}${ssrIncludeBooleanAttr(unref(updating) === a.id) ? " disabled" : ""} data-v-01c331a3><option value="" disabled data-v-01c331a3>${ssrInterpolate(a.status === "NEW" ? "Назначить статус…" : "Изменить статус…")}</option><option value="IN_PROGRESS" data-v-01c331a3> Идёт обучение </option><option value="COMPLETED" data-v-01c331a3> Обучение завершено </option></select></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      if (!unref(pending) && unref(totalPages) > 1) {
        _push(`<div class="pager" data-v-01c331a3><button type="button" class="btn btn-ghost"${ssrIncludeBooleanAttr(unref(page) <= 1) ? " disabled" : ""} data-v-01c331a3> Назад </button><span class="pill" data-v-01c331a3>Стр. ${ssrInterpolate(unref(page))} / ${ssrInterpolate(unref(totalPages))}</span><button type="button" class="btn btn-ghost"${ssrIncludeBooleanAttr(unref(page) >= unref(totalPages)) ? " disabled" : ""} data-v-01c331a3> Вперёд </button></div>`);
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
export {
  index as default
};
//# sourceMappingURL=index-UxtvLYSB.js.map
