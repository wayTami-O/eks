export default defineNuxtPlugin(async () => {
  const { token, refreshMe } = useAuth();
  if (token.value) await refreshMe();
});
