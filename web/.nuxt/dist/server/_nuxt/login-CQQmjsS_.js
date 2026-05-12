import { _ as __nuxt_component_0 } from "./nuxt-link-D2-iP1B0.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/hookable/dist/index.mjs";
import { u as useAuth } from "./useAuth-BGCrChQp.js";
import { a as useToast } from "../server.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useAuth();
    useToast();
    const login = ref("");
    const password = ref("");
    const pending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card",
        style: { "max-width": "460px", "margin": "0 auto" }
      }, _attrs))}><h1 style="${ssrRenderStyle({ "margin": "0 0 0.35rem", "font-size": "1.35rem" })}"> Вход </h1><p style="${ssrRenderStyle({ "margin": "0 0 1rem", "color": "var(--muted)" })}"> Войдите по логину и паролю. `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/register" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ещё не зарегистрированы? Регистрация`);
          } else {
            return [
              createTextVNode("Ещё не зарегистрированы? Регистрация")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><form><div class="field"><label for="login">Логин</label><input id="login"${ssrRenderAttr("value", unref(login))} name="login" autocomplete="username" required></div><div class="field"><label for="password">Пароль</label><input id="password"${ssrRenderAttr("value", unref(password))} type="password" name="password" autocomplete="current-password" required></div><button type="submit" class="btn btn-primary" style="${ssrRenderStyle({ "width": "100%" })}"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""}> Войти </button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-CQQmjsS_.js.map
