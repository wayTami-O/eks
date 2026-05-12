import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { u as useApi } from "./useApi-C8FYqZZ9.js";
import { a as useToast } from "../server.mjs";
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
      }, _attrs))}><h1 style="${ssrRenderStyle({ "margin": "0 0 0.35rem", "font-size": "1.35rem" })}"> Новая заявка </h1><p style="${ssrRenderStyle({ "margin": "0 0 1rem", "color": "var(--muted)" })}"> Укажите название курса (можно выбрать из подсказок или ввести своё). Дата начала — формат <strong>ДД.ММ.ГГГГ</strong>. </p><form><div class="field"><label for="course">Название курса</label><input id="course"${ssrRenderAttr("value", unref(courseTitle))} type="text" list="course-hints" maxlength="200" autocomplete="off" placeholder="Например: Основы веб-дизайна" required><datalist id="course-hints"><!--[-->`);
      ssrRenderList(unref(courseHints), (c) => {
        _push(`<option${ssrRenderAttr("value", c)}></option>`);
      });
      _push(`<!--]--></datalist></div><div class="field"><label for="start">Дата начала обучения</label><input id="start"${ssrRenderAttr("value", unref(startDate))} placeholder="12.05.2026" required></div><div class="field"><span style="${ssrRenderStyle({ "font-size": "0.85rem", "color": "var(--muted)" })}">Способ оплаты</span><div style="${ssrRenderStyle({ "display": "flex", "gap": "0.75rem", "flex-wrap": "wrap", "margin-top": "0.35rem" })}"><label class="pill" style="${ssrRenderStyle({ "cursor": "pointer", "display": "inline-flex", "gap": "0.35rem", "align-items": "center" })}"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(paymentMethod), "CASH")) ? " checked" : ""} type="radio" value="CASH" name="pay"> Наличными </label><label class="pill" style="${ssrRenderStyle({ "cursor": "pointer", "display": "inline-flex", "gap": "0.35rem", "align-items": "center" })}"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(paymentMethod), "PHONE_TRANSFER")) ? " checked" : ""} type="radio" value="PHONE_TRANSFER" name="pay"> Переводом по номеру телефона </label></div></div><button type="submit" class="btn btn-primary" style="${ssrRenderStyle({ "width": "100%" })}"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""}> Отправить </button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/applications/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=new-B_dsFE_x.js.map
