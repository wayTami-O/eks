<script setup lang="ts">
const { paymentLabel, statusLabel } = useLabels();

type AppRow = {
  id: string;
  courseTitle: string;
  startDate: string;
  paymentMethod: string;
  status: string;
  createdAt: string;
  review: { id: string; content: string; createdAt: string } | null;
};

const { api } = useApi();
const toast = useToast();

const items = ref<AppRow[]>([]);
const pending = ref(true);
const reviewText = ref<Record<string, string>>({});
const reviewPending = ref<Record<string, boolean>>({});

definePageMeta({
  layout: "default",
  middleware: ["auth"],
});

/** Дата подачи заявки из ISO для отображения в таблице. */
function submittedAt(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return `${dd}.${mm}.${yyyy}, ${hh}:${mi}`;
}

async function load() {
  pending.value = true;
  try {
    const res = await api<{ ok: boolean; applications: AppRow[] }>(
      "/api/applications",
    );
    items.value = res.applications ?? [];
  } catch {
    toast.push("Не удалось загрузить заявки", "error");
  } finally {
    pending.value = false;
  }
}

onMounted(load);

async function sendReview(id: string) {
  const text = (reviewText.value[id] ?? "").trim();
  if (text.length < 3) {
    toast.push("Отзыв слишком короткий", "error");
    return;
  }
  reviewPending.value = { ...reviewPending.value, [id]: true };
  try {
    await api(`/api/applications/${id}/review`, {
      method: "POST",
      body: { content: text },
    });
    toast.push("Отзыв сохранён", "success");
    reviewText.value = { ...reviewText.value, [id]: "" };
    await load();
  } catch (e: unknown) {
    const err = e as { data?: { message?: string } };
    toast.push(err?.data?.message ?? "Не удалось отправить отзыв", "error");
  } finally {
    reviewPending.value = { ...reviewPending.value, [id]: false };
  }
}
</script>

<template>
  <div>
    <div class="apps-head">
      <div>
        <h1 style="margin: 0; font-size: 1.35rem">
          Мои заявки
        </h1>
        <p style="margin: 0.35rem 0 0; color: var(--muted)">
          Дата подачи — когда заявка сохранена в системе.
        </p>
      </div>
      <NuxtLink to="/applications/new" class="btn btn-primary">
        Новая заявка
      </NuxtLink>
    </div>

    <p v-if="pending">
      Загрузка…
    </p>

    <div v-else-if="items.length === 0" class="card">
      Пока нет заявок.
      <NuxtLink to="/applications/new" style="margin-left: 0.35rem">
        Создать
      </NuxtLink>
    </div>

    <div v-else class="card table-wrap" style="padding: 0; overflow: hidden">
      <table class="apps-table">
        <thead>
          <tr>
            <th>Название курса</th>
            <th>Дата начала</th>
            <th>Способ оплаты</th>
            <th>Статус</th>
            <th>Дата подачи</th>
            <th>Отзыв</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in items" :key="a.id">
            <td data-label="Курс">
              {{ a.courseTitle }}
            </td>
            <td data-label="Старт">
              {{ a.startDate }}
            </td>
            <td data-label="Оплата">
              {{ paymentLabel(a.paymentMethod) }}
            </td>
            <td data-label="Статус">
              <span class="tag">{{ statusLabel(a.status) }}</span>
            </td>
            <td data-label="Подача">
              {{ submittedAt(a.createdAt) }}
            </td>
            <td class="apps-review-cell" data-label="Отзыв">
              <template v-if="a.review">
                <p class="review-quote">
                  {{ a.review.content }}
                </p>
              </template>
              <template v-else>
                <label class="field" style="margin: 0">
                  <textarea
                    v-model="reviewText[a.id]"
                    rows="2"
                    placeholder="Текст отзыва"
                  />
                </label>
                <button
                  type="button"
                  class="btn btn-primary"
                  style="margin-top: 0.35rem; width: 100%"
                  :disabled="reviewPending[a.id]"
                  @click="sendReview(a.id)"
                >
                  Отправить отзыв
                </button>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.apps-head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
}

.table-wrap {
  overflow-x: auto;
}

.apps-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 860px;
}

.apps-table th,
.apps-table td {
  padding: 0.85rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  vertical-align: top;
  text-align: left;
}

.apps-table th {
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
}

.review-quote {
  margin: 0;
  line-height: 1.45;
  font-size: 0.9rem;
}

.apps-review-cell .field textarea {
  width: 100%;
  min-width: 200px;
}

/* Телефон: карточки по строкам вместо узкой таблицы */
@media (max-width: 767px) {
  .apps-table {
    min-width: 0;
    display: block;
  }

  .apps-table thead {
    display: none;
  }

  .apps-table tbody {
    display: block;
  }

  .apps-table tr {
    display: block;
    margin-bottom: 1rem;
    padding: 0.85rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius);
    background: rgba(15, 20, 25, 0.35);
  }

  .apps-table td {
    display: block;
    padding: 0.35rem 0;
    border: none;
  }

  .apps-table td::before {
    content: attr(data-label);
    display: block;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--muted);
    margin-bottom: 0.2rem;
  }

  .apps-review-cell .field textarea {
    min-width: 0;
  }
}
</style>
