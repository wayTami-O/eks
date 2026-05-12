import { executeAsync } from "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/unctx/dist/index.mjs";
import { d as defineNuxtRouteMiddleware, n as navigateTo } from "../server.mjs";
import { u as useAuth } from "./useAuth-BGCrChQp.js";
import "vue";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/hookable/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/defu/dist/defu.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ufo/dist/index.mjs";
import "vue/server-renderer";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/cookie-es/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/destr/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/ohash/dist/index.mjs";
import "/Users/brav1o/projects/testFolder/eks-test2/web/node_modules/klona/dist/index.mjs";
const admin = defineNuxtRouteMiddleware(async () => {
  let __temp, __restore;
  const { token, refreshMe, user } = useAuth();
  if (!token.value) return navigateTo("/login");
  if (!user.value) [__temp, __restore] = executeAsync(() => refreshMe()), __temp = await __temp, __restore();
  if (!user.value) return navigateTo("/login");
  if (user.value.role !== "ADMIN") return navigateTo("/");
});
export {
  admin as default
};
//# sourceMappingURL=admin-CzxQ6n6h.js.map
