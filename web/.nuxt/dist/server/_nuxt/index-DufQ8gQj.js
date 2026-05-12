import { _ as __nuxt_component_0 } from "./nuxt-link-D2-iP1B0.js";
import { defineComponent, ref, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { u as useLabels } from "./useLabels-Cidp0rTx.js";
import { u as useApi } from "./useApi-C8FYqZZ9.js";
import { a as useToast, _ as _export_sfc } from "../server.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/hookable/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ufo/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/defu/dist/defu.mjs";
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
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/@unhead/vue/dist/index.mjs";
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
      if (Number.isNaN(d.getTime())) return "—";
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const yyyy = d.getFullYear();
      const hh = String(d.getHours()).padStart(2, "0");
      const mi = String(d.getMinutes()).padStart(2, "0");
      return `${dd}.${mm}.${yyyy}, ${hh}:${mi}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1823df28><div class="apps-head" data-v-1823df28><div data-v-1823df28><h1 style="${ssrRenderStyle({ "margin": "0", "font-size": "1.35rem" })}" data-v-1823df28> Мои заявки </h1><p style="${ssrRenderStyle({ "margin": "0.35rem 0 0", "color": "var(--muted)" })}" data-v-1823df28> Дата подачи — когда заявка сохранена в системе. </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/applications/new",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Новая заявка `);
          } else {
            return [
              createTextVNode(" Новая заявка ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(pending)) {
        _push(`<p data-v-1823df28> Загрузка… </p>`);
      } else if (unref(items).length === 0) {
        _push(`<div class="card" data-v-1823df28> Пока нет заявок. `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/applications/new",
          style: { "margin-left": "0.35rem" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Создать `);
            } else {
              return [
                createTextVNode(" Создать ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="card table-wrap" style="${ssrRenderStyle({ "padding": "0", "overflow": "hidden" })}" data-v-1823df28><table class="apps-table" data-v-1823df28><thead data-v-1823df28><tr data-v-1823df28><th data-v-1823df28>Название курса</th><th data-v-1823df28>Дата начала</th><th data-v-1823df28>Способ оплаты</th><th data-v-1823df28>Статус</th><th data-v-1823df28>Дата подачи</th><th data-v-1823df28>Отзыв</th></tr></thead><tbody data-v-1823df28><!--[-->`);
        ssrRenderList(unref(items), (a) => {
          _push(`<tr data-v-1823df28><td data-label="Курс" data-v-1823df28>${ssrInterpolate(a.courseTitle)}</td><td data-label="Старт" data-v-1823df28>${ssrInterpolate(a.startDate)}</td><td data-label="Оплата" data-v-1823df28>${ssrInterpolate(unref(paymentLabel)(a.paymentMethod))}</td><td data-label="Статус" data-v-1823df28><span class="tag" data-v-1823df28>${ssrInterpolate(unref(statusLabel)(a.status))}</span></td><td data-label="Подача" data-v-1823df28>${ssrInterpolate(submittedAt(a.createdAt))}</td><td class="apps-review-cell" data-label="Отзыв" data-v-1823df28>`);
          if (a.review) {
            _push(`<p class="review-quote" data-v-1823df28>${ssrInterpolate(a.review.content)}</p>`);
          } else {
            _push(`<!--[--><label class="field" style="${ssrRenderStyle({ "margin": "0" })}" data-v-1823df28><textarea rows="2" placeholder="Текст отзыва" data-v-1823df28>${ssrInterpolate(unref(reviewText)[a.id])}</textarea></label><button type="button" class="btn btn-primary" style="${ssrRenderStyle({ "margin-top": "0.35rem", "width": "100%" })}"${ssrIncludeBooleanAttr(unref(reviewPending)[a.id]) ? " disabled" : ""} data-v-1823df28> Отправить отзыв </button><!--]-->`);
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
export {
  index as default
};
//# sourceMappingURL=index-DufQ8gQj.js.map
