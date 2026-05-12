<script setup lang="ts">
const { user } = useAuth();

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <HeroSlider :interval-ms="3000" />
    <section class="grid-2">
      <div class="card">
        <p class="tag">
          Модуль записи
        </p>
        <h2 style="margin: 0.5rem 0 0.35rem">
          Онлайн‑курсы ДПО
        </h2>
        <p style="margin: 0; color: var(--muted); line-height: 1.55">
          Выберите программу, укажите дату старта и способ оплаты — заявка сразу
          получит статус «Новая», а администратор сможет сопровождать обучение.
        </p>
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap">
          <NuxtLink v-if="user" to="/applications/new" class="btn btn-primary">
            Создать заявку
          </NuxtLink>
          <NuxtLink v-else to="/register" class="btn btn-primary">
            Создать аккаунт
          </NuxtLink>
          <NuxtLink to="/login" class="btn btn-ghost">
            Уже есть аккаунт
          </NuxtLink>
        </div>
      </div>
      <div class="card">
        <p class="tag">
          Прозрачный статус
        </p>
        <h2 style="margin: 0.5rem 0 0.35rem">
          Отзывы о курсах
        </h2>
        <p style="margin: 0; color: var(--muted); line-height: 1.55">
          В разделе заявок можно оставить текстовый отзыв по каждой программе.
        </p>
        <div style="margin-top: 1rem">
          <NuxtLink to="/applications" class="btn btn-ghost">
            Перейти к заявкам
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
