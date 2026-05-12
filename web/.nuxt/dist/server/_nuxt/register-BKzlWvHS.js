import { _ as __nuxt_component_0 } from "./nuxt-link-D2-iP1B0.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/hookable/dist/index.mjs";
import { a as useToast } from "../server.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ufo/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/defu/dist/defu.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/unctx/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    const login = ref("");
    const password = ref("");
    const fullName = ref("");
    const phone = ref("");
    const email = ref("");
    const errors = ref({});
    const pending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card",
        style: { "max-width": "520px", "margin": "0 auto" }
      }, _attrs))}><h1 style="${ssrRenderStyle({ "margin": "0 0 0.35rem", "font-size": "1.35rem" })}"> Регистрация </h1><p style="${ssrRenderStyle({ "margin": "0 0 1rem", "color": "var(--muted)" })}"> Все поля обязательны. `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Уже зарегистрированы? Войти`);
          } else {
            return [
              createTextVNode("Уже зарегистрированы? Войти")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><form><div class="field"><label for="login">Логин</label><input id="login"${ssrRenderAttr("value", unref(login))} autocomplete="username" required>`);
      if (unref(errors).login) {
        _push(`<p class="field-error">${ssrInterpolate(unref(errors).login)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="field"><label for="password">Пароль</label><input id="password"${ssrRenderAttr("value", unref(password))} type="password" autocomplete="new-password" required>`);
      if (unref(errors).password) {
        _push(`<p class="field-error">${ssrInterpolate(unref(errors).password)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="field"><label for="fullName">ФИО</label><input id="fullName"${ssrRenderAttr("value", unref(fullName))} autocomplete="name" required>`);
      if (unref(errors).fullName) {
        _push(`<p class="field-error">${ssrInterpolate(unref(errors).fullName)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="field"><label for="phone">Телефон</label><input id="phone"${ssrRenderAttr("value", unref(phone))} placeholder="8(999)123-45-67" inputmode="numeric" required>`);
      if (unref(errors).phone) {
        _push(`<p class="field-error">${ssrInterpolate(unref(errors).phone)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="field"><label for="email">Email</label><input id="email"${ssrRenderAttr("value", unref(email))} type="email" autocomplete="email" required>`);
      if (unref(errors).email) {
        _push(`<p class="field-error">${ssrInterpolate(unref(errors).email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="btn btn-primary" style="${ssrRenderStyle({ "width": "100%" })}"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""}> Создать пользователя </button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=register-BKzlWvHS.js.map
