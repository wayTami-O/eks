<script setup lang="ts">
import {
  validateEmail,
  validateFullName,
  validateLogin,
  validatePassword,
  validatePhone,
} from "~/utils/validation";

const resolveBase = useApiBase();
const toast = useToast();

const login = ref("");
const password = ref("");
const fullName = ref("");
const phone = ref("");
const email = ref("");

const errors = ref<Record<string, string>>({});
const pending = ref(false);

definePageMeta({
  layout: "default",
});

function validateAll(): boolean {
  const e: Record<string, string> = {};
  const l = validateLogin(login.value.trim());
  if (l) e.login = l;
  const p = validatePassword(password.value);
  if (p) e.password = p;
  const f = validateFullName(fullName.value);
  if (f) e.fullName = f;
  const ph = validatePhone(phone.value.trim());
  if (ph) e.phone = ph;
  const em = validateEmail(email.value.trim());
  if (em) e.email = em;
  errors.value = e;
  return Object.keys(e).length === 0;
}

async function submit() {
  if (!validateAll()) {
    toast.push("Исправьте ошибки в полях", "error");
    return;
  }
  pending.value = true;
  errors.value = {};
  try {
    const res = await $fetch<{
      ok: boolean;
      message?: string;
      errors?: Record<string, string[]>;
    }>(`${resolveBase()}/api/auth/register`, {
      method: "POST",
      body: {
        login: login.value.trim(),
        password: password.value,
        fullName: fullName.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim(),
      },
    });
    if (res.ok) {
      toast.push("Пользователь создан. Теперь можно войти.", "success");
      await navigateTo("/login");
      return;
    }
    if (res.message) toast.push(res.message, "error");
    if (res.errors) {
      const flat: Record<string, string> = {};
      for (const [k, v] of Object.entries(res.errors)) {
        if (v?.[0]) flat[k] = v[0];
      }
      errors.value = flat;
    }
  } catch (e: unknown) {
    const err = e as { data?: { message?: string; errors?: Record<string, string[]> } };
    if (err?.data?.message) toast.push(err.data.message, "error");
    if (err?.data?.errors) {
      const flat: Record<string, string> = {};
      for (const [k, v] of Object.entries(err.data.errors)) {
        if (v?.[0]) flat[k] = v[0];
      }
      errors.value = flat;
    } else {
      toast.push("Не удалось создать пользователя", "error");
    }
  } finally {
    pending.value = false;
  }
}
</script>

<template>
  <div class="card" style="max-width: 520px; margin: 0 auto">
    <h1 style="margin: 0 0 0.35rem; font-size: 1.35rem">
      Регистрация
    </h1>
    <p style="margin: 0 0 1rem; color: var(--muted)">
      Все поля обязательны.
      <NuxtLink to="/login">Уже зарегистрированы? Войти</NuxtLink>
    </p>
    <form @submit.prevent="submit">
      <div class="field">
        <label for="login">Логин</label>
        <input
          id="login"
          v-model="login"
          autocomplete="username"
          required
        >
        <p v-if="errors.login" class="field-error">
          {{ errors.login }}
        </p>
      </div>
      <div class="field">
        <label for="password">Пароль</label>
        <input
          id="password"
          v-model="password"
          type="password"
          autocomplete="new-password"
          required
        >
        <p v-if="errors.password" class="field-error">
          {{ errors.password }}
        </p>
      </div>
      <div class="field">
        <label for="fullName">ФИО</label>
        <input id="fullName" v-model="fullName" autocomplete="name" required>
        <p v-if="errors.fullName" class="field-error">
          {{ errors.fullName }}
        </p>
      </div>
      <div class="field">
        <label for="phone">Телефон</label>
        <input
          id="phone"
          v-model="phone"
          placeholder="8(999)123-45-67"
          inputmode="numeric"
          required
        >
        <p v-if="errors.phone" class="field-error">
          {{ errors.phone }}
        </p>
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          autocomplete="email"
          required
        >
        <p v-if="errors.email" class="field-error">
          {{ errors.email }}
        </p>
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%" :disabled="pending">
        Создать пользователя
      </button>
    </form>
  </div>
</template>
