<script setup lang="ts">
const { user, logout } = useAuth();

async function onLogout() {
  logout();
  await navigateTo("/");
}
</script>

<template>
  <header class="topbar">
    <NuxtLink to="/" class="brand">
      Корочки<span style="color: var(--accent)">.есть</span>
    </NuxtLink>
    <nav class="nav" aria-label="Основное меню">
      <NuxtLink v-if="user" to="/applications" class="btn btn-ghost">
        Мои заявки
      </NuxtLink>
      <NuxtLink v-if="user?.role === 'ADMIN'" to="/admin" class="btn btn-ghost">
        Админ
      </NuxtLink>
      <NuxtLink v-if="!user" to="/login" class="btn btn-ghost">
        Вход
      </NuxtLink>
      <NuxtLink v-if="!user" to="/register" class="btn btn-primary">
        Регистрация
      </NuxtLink>
      <span v-if="user" class="pill">{{ user.fullName }}</span>
      <button v-if="user" type="button" class="btn btn-ghost" @click="onLogout">
        Выход
      </button>
    </nav>
  </header>
</template>
