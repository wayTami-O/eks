<script setup lang="ts">
import { validateCourseTitle } from "~/utils/validation";

const { api } = useApi();
const toast = useToast();

/** Подсказки для поля «курс» (можно ввести любое название). */
const courseHints = ref<string[]>([]);
const courseTitle = ref("");
const startDate = ref("");
const paymentMethod = ref<"CASH" | "PHONE_TRANSFER">("CASH");
const pending = ref(false);

definePageMeta({
  layout: "default",
  middleware: ["auth"],
});

onMounted(async () => {
  try {
    const res = await api<{ courses: string[] }>("/api/courses");
    courseHints.value = res.courses ?? [];
  } catch {
    toast.push("Не удалось загрузить подсказки по курсам", "error");
  }
});

async function submit() {
  const courseErr = validateCourseTitle(courseTitle.value);
  if (courseErr) {
    toast.push(courseErr, "error");
    return;
  }
  pending.value = true;
  try {
    await api("/api/applications", {
      method: "POST",
      body: {
        courseTitle: courseTitle.value.trim(),
        startDate: startDate.value.trim(),
        paymentMethod: paymentMethod.value,
      },
    });
    toast.push("Заявка создана со статусом «Новая»", "success");
    await navigateTo("/applications");
  } catch (e: unknown) {
    const err = e as { data?: { errors?: Record<string, string[]> } };
    const msg =
      err?.data?.errors?.courseTitle?.[0] ??
      err?.data?.errors?.startDate?.[0] ??
      "Проверьте поля формы";
    toast.push(msg, "error");
  } finally {
    pending.value = false;
  }
}
</script>

<template>
  <div class="card" style="max-width: 560px; margin: 0 auto">
    <h1 style="margin: 0 0 0.35rem; font-size: 1.35rem">
      Новая заявка
    </h1>
    <p style="margin: 0 0 1rem; color: var(--muted)">
      Укажите название курса (можно выбрать из подсказок или ввести своё).
      Дата начала — формат <strong>ДД.ММ.ГГГГ</strong>.
    </p>
    <form @submit.prevent="submit">
      <div class="field">
        <label for="course">Название курса</label>
        <input
          id="course"
          v-model="courseTitle"
          type="text"
          list="course-hints"
          maxlength="200"
          autocomplete="off"
          placeholder="Например: Основы веб-дизайна"
          required
        >
        <datalist id="course-hints">
          <option v-for="c in courseHints" :key="c" :value="c" />
        </datalist>
      </div>
      <div class="field">
        <label for="start">Дата начала обучения</label>
        <input
          id="start"
          v-model="startDate"
          placeholder="12.05.2026"
          required
        >
      </div>
      <div class="field">
        <span style="font-size: 0.85rem; color: var(--muted)">Способ оплаты</span>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.35rem">
          <label class="pill" style="cursor: pointer; display: inline-flex; gap: 0.35rem; align-items: center">
            <input v-model="paymentMethod" type="radio" value="CASH" name="pay">
            Наличными
          </label>
          <label class="pill" style="cursor: pointer; display: inline-flex; gap: 0.35rem; align-items: center">
            <input v-model="paymentMethod" type="radio" value="PHONE_TRANSFER" name="pay">
            Переводом по номеру телефона
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%" :disabled="pending">
        Отправить
      </button>
    </form>
  </div>
</template>
