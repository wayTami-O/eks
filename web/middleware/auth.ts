export default defineNuxtRouteMiddleware(async () => {
  const { token, refreshMe, user } = useAuth();
  if (!token.value) return navigateTo("/login");
  if (!user.value) await refreshMe();
  if (!user.value) return navigateTo("/login");
});
