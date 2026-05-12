<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "ru" },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ToastStack />
  </div>
</template>
