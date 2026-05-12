import { defineComponent, ref, mergeProps, unref, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-D2-iP1B0.js";
import { u as useAuth } from "./useAuth-BGCrChQp.js";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/unctx/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/defu/dist/defu.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ufo/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/cookie-es/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/destr/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ohash/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/klona/dist/index.mjs";
const src = "https://picsum.photos/seed/korochki-slide/960/520";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeroSlider",
  __ssrInlineRender: true,
  props: {
    intervalMs: {}
  },
  setup(__props) {
    const props = __props;
    props.intervalMs ?? 3e3;
    const slides = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      src,
      alt: "Образовательный курс — иллюстрация"
    }));
    const index = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "slider",
        "aria-roledescription": "carousel"
      }, _attrs))} data-v-2f89f18b><div class="slider-viewport" data-v-2f89f18b><img class="slider-img"${ssrRenderAttr("src", unref(slides)[unref(index)].src)}${ssrRenderAttr("alt", unref(slides)[unref(index)].alt)} loading="lazy" decoding="async" width="960" height="520" data-v-2f89f18b><div class="slider-overlay" data-v-2f89f18b><p class="slider-kicker" data-v-2f89f18b> Дополнительное профессиональное образование </p><h1 class="slider-title" data-v-2f89f18b> Корочки.есть </h1><p class="slider-sub" data-v-2f89f18b> Запишитесь на онлайн‑курс и получите документ установленного образца. </p></div><div class="slider-controls" data-v-2f89f18b><button type="button" class="slider-btn" aria-label="Назад" data-v-2f89f18b> ‹ </button><div class="slider-dots" role="tablist" data-v-2f89f18b><!--[-->`);
      ssrRenderList(unref(slides), (s, i) => {
        _push(`<button type="button" class="${ssrRenderClass([{ active: i === unref(index) }, "dot"])}"${ssrRenderAttr("aria-selected", i === unref(index))}${ssrRenderAttr("aria-label", `Слайд ${i + 1}`)} data-v-2f89f18b></button>`);
      });
      _push(`<!--]--></div><button type="button" class="slider-btn" aria-label="Вперёд" data-v-2f89f18b> › </button></div></div></section>`);
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
      _push(`<section class="grid-2"><div class="card"><p class="tag"> Модуль записи </p><h2 style="${ssrRenderStyle({ "margin": "0.5rem 0 0.35rem" })}"> Онлайн‑курсы ДПО </h2><p style="${ssrRenderStyle({ "margin": "0", "color": "var(--muted)", "line-height": "1.55" })}"> Выберите программу, укажите дату старта и способ оплаты — заявка сразу получит статус «Новая», а администратор сможет сопровождать обучение. </p><div style="${ssrRenderStyle({ "margin-top": "1rem", "display": "flex", "gap": "0.5rem", "flex-wrap": "wrap" })}">`);
      if (unref(user)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/applications/new",
          class: "btn btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Создать заявку `);
            } else {
              return [
                createTextVNode(" Создать заявку ")
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
              _push2(` Создать аккаунт `);
            } else {
              return [
                createTextVNode(" Создать аккаунт ")
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
            _push2(` Уже есть аккаунт `);
          } else {
            return [
              createTextVNode(" Уже есть аккаунт ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card"><p class="tag"> Прозрачный статус </p><h2 style="${ssrRenderStyle({ "margin": "0.5rem 0 0.35rem" })}"> Отзывы о курсах </h2><p style="${ssrRenderStyle({ "margin": "0", "color": "var(--muted)", "line-height": "1.55" })}"> В разделе заявок можно оставить текстовый отзыв по каждой программе. </p><div style="${ssrRenderStyle({ "margin-top": "1rem" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/applications",
        class: "btn btn-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Перейти к заявкам `);
          } else {
            return [
              createTextVNode(" Перейти к заявкам ")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CDc9MTp0.js.map
