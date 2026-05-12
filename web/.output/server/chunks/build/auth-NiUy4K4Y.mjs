import { r as executeAsync } from '../nitro/nitro.mjs';
import { d as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useAuth } from './useAuth-BGCrChQp.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const auth = defineNuxtRouteMiddleware(async () => {
  let __temp, __restore;
  const { token, refreshMe, user } = useAuth();
  if (!token.value) return navigateTo("/login");
  if (!user.value) [__temp, __restore] = executeAsync(() => refreshMe()), __temp = await __temp, __restore();
  if (!user.value) return navigateTo("/login");
});

export { auth as default };
//# sourceMappingURL=auth-NiUy4K4Y.mjs.map
