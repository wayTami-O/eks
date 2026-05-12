<script setup lang="ts">
const resolveBase = useApiBase();
const { setSession } = useAuth();
const toast = useToast();

const login = ref("");
const password = ref("");
const pending = ref(false);

definePageMeta({
  layout: "default",
});

async function submit() {
  pending.value = true;
  try {
    const res = await $fetch<{
      ok: boolean;
      token?: string;
      user?: {
        id: string;
        login: string;
        role: "USER" | "ADMIN";
        fullName: string;
      };
      message?: string;
    }>(`${resolveBase()}/api/auth/login`, {
      method: "POST",
      body: { login: login.value.trim(), password: password.value },
    });
    if (res.ok && res.token && res.user) {
      setSession(res.token, res.user);
      await navigateTo("/applications");
      return;
    }
    toast.push(res.message ?? "Неверный логин или пароль", "error");
  } catch (e: unknown) {
    const err = e as { data?: { message?: string } };
    toast.push(err?.data?.message ?? "Неверный логин или пароль", "error");
  } finally {
    pending.value = false;
  }
}
</script>

<template>
  <div class="card" style="max-width: 460px; margin: 0 auto">
    <h1 style="margin: 0 0 0.35rem; font-size: 1.35rem">
      Вход
    </h1>
    <p style="margin: 0 0 1rem; color: var(--muted)">
      Войдите по логину и паролю.
      <NuxtLink to="/register">Ещё не зарегистрированы? Регистрация</NuxtLink>
    </p>
    <form @submit.prevent="submit">
      <div class="field">
        <label for="login">Логин</label>
        <input
          id="login"
          v-model="login"
          name="login"
          autocomplete="username"
          required
        >
      </div>
      <div class="field">
        <label for="password">Пароль</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          autocomplete="current-password"
          required
        >
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%" :disabled="pending">
        Войти
      </button>
    </form>
  </div>
</template>
