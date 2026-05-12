<script setup lang="ts">
const { paymentLabel, statusLabel } = useLabels();

type Row = {
  id: string;
  courseTitle: string;
  startDate: string;
  paymentMethod: string;
  status: string;
  createdAt: string;
  review: { content: string } | null;
  user?: {
    login: string;
    fullName: string;
    email: string;
    phone: string;
  };
};

const { api } = useApi();
const toast = useToast();

const applications = ref<Row[]>([]);
const page = ref(1);
const limit = ref(8);
const total = ref(0);
const totalPages = ref(1);
const filterStatus = ref<"" | "NEW" | "IN_PROGRESS" | "COMPLETED">("");
const pending = ref(true);
const updating = ref<string | null>(null);

definePageMeta({
  layout: "default",
  middleware: ["admin"],
});

async function load() {
  pending.value = true;
  try {
    const q: Record<string, string> = {
      page: String(page.value),
      limit: String(limit.value),
    };
    if (filterStatus.value) q.status = filterStatus.value;
    const res = await api<{
      ok: boolean;
      applications: Row[];
      total: number;
      totalPages: number;
      page: number;
    }>("/api/admin/applications", { query: q });
    applications.value = res.applications;
    total.value = res.total;
    totalPages.value = res.totalPages;
    page.value = res.page;
  } catch {
    toast.push("Не удалось загрузить заявки", "error");
  } finally {
    pending.value = false;
  }
}

onMounted(load);

watch([page, filterStatus], () => {
  void load();
});

async function setStatus(id: string, status: string) {
  updating.value = id;
  try {
    await api(`/api/admin/applications/${id}/status`, {
      method: "PATCH",
      body: { status },
    });
    toast.push("Статус обновлён", "success");
    await load();
  } catch {
    toast.push("Не удалось обновить статус", "error");
  } finally {
    updating.value = null;
  }
}

/** ТЗ п. 6.3: только перевод в «Идёт обучение» или «Обучение завершено». */
function onAdminStatus(id: string, ev: Event) {
  const v = (ev.target as HTMLSelectElement).value;
  if (v === "IN_PROGRESS" || v === "COMPLETED") void setStatus(id, v);
}

function goPrev() {
  page.value = Math.max(1, page.value - 1);
}

function goNext() {
  page.value = Math.min(totalPages.value, page.value + 1);
}
</script>

<template>
  <div>
    <h1 style="margin: 0 0 1rem; font-size: 1.35rem">
      Панель администратора
    </h1>

    <div class="toolbar card" style="margin-bottom: 1rem; padding: 1rem">
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center">
        <label style="display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.85rem; color: var(--muted)">
          Фильтр по статусу
          <select v-model="filterStatus" class="filter-select" @change="page = 1">
            <option value="">
              Все
            </option>
            <option value="NEW">
              Новая
            </option>
            <option value="IN_PROGRESS">
              Идёт обучение
            </option>
            <option value="COMPLETED">
              Обучение завершено
            </option>
          </select>
        </label>
        <span class="pill">Всего: {{ total }}</span>
      </div>
    </div>

    <p v-if="pending">
      Загрузка…
    </p>

    <div v-else class="table-wrap card" style="padding: 0; overflow: hidden">
      <table class="tbl">
        <thead>
          <tr>
            <th>Слушатель</th>
            <th>Курс</th>
            <th>Старт</th>
            <th>Оплата</th>
            <th>Статус</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in applications" :key="a.id">
            <td>
              <div style="font-weight: 600">
                {{ a.user?.fullName }}
              </div>
              <div style="font-size: 0.85rem; color: var(--muted)">
                {{ a.user?.login }} · {{ a.user?.email }}
              </div>
            </td>
            <td>{{ a.courseTitle }}</td>
            <td>{{ a.startDate }}</td>
            <td>{{ paymentLabel(a.paymentMethod) }}</td>
            <td>
              <span class="tag">{{ statusLabel(a.status) }}</span>
              <div v-if="a.review" style="margin-top: 0.35rem; font-size: 0.8rem; color: var(--muted)">
                Есть отзыв
              </div>
            </td>
            <td>
              <select
                class="mini-select"
                :value="a.status === 'NEW' ? '' : a.status"
                :disabled="updating === a.id"
                @change="onAdminStatus(a.id, $event)"
              >
                <option value="" disabled>
                  {{ a.status === 'NEW' ? 'Назначить статус…' : 'Изменить статус…' }}
                </option>
                <option value="IN_PROGRESS">
                  Идёт обучение
                </option>
                <option value="COMPLETED">
                  Обучение завершено
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="!pending && totalPages > 1" class="pager">
      <button type="button" class="btn btn-ghost" :disabled="page <= 1" @click="goPrev">
        Назад
      </button>
      <span class="pill">Стр. {{ page }} / {{ totalPages }}</span>
      <button
        type="button"
        class="btn btn-ghost"
        :disabled="page >= totalPages"
        @click="goNext"
      >
        Вперёд
      </button>
    </div>
  </div>
</template>

<style scoped>
.toolbar select,
.filter-select {
  padding: 0.45rem 0.65rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 20, 25, 0.65);
  color: var(--text);
  font-family: inherit;
}

.table-wrap {
  overflow-x: auto;
}

.tbl {
  width: 100%;
  border-collapse: collapse;
  min-width: 860px;
}

.tbl th,
.tbl td {
  padding: 0.85rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  vertical-align: top;
  text-align: left;
}

.tbl th {
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
}

.mini-select {
  padding: 0.45rem 0.55rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 20, 25, 0.65);
  color: var(--text);
  font-family: inherit;
}

.pager {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

@media (max-width: 420px) {
  .tbl {
    min-width: 720px;
  }
}
</style>
