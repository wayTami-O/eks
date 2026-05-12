<script setup lang="ts">
const props = defineProps<{
  intervalMs?: number;
}>();

const interval = props.intervalMs ?? 3000;
const src =
  "https://picsum.photos/seed/korochki-slide/960/520";
const slides = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  src,
  alt: "Образовательный курс — иллюстрация",
}));

const index = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;

function next() {
  index.value = (index.value + 1) % slides.length;
}

function prev() {
  index.value = (index.value - 1 + slides.length) % slides.length;
}

onMounted(() => {
  timer = setInterval(next, interval);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <section class="slider" aria-roledescription="carousel">
    <div class="slider-viewport">
      <Transition name="fade-slide" mode="out-in">
        <img
          :key="index"
          class="slider-img"
          :src="slides[index].src"
          :alt="slides[index].alt"
          loading="lazy"
          decoding="async"
          width="960"
          height="520"
        >
      </Transition>
      <div class="slider-overlay">
        <p class="slider-kicker">
          Дополнительное профессиональное образование
        </p>
        <h1 class="slider-title">
          Корочки.есть
        </h1>
        <p class="slider-sub">
          Запишитесь на онлайн‑курс и получите документ установленного образца.
        </p>
      </div>
      <div class="slider-controls">
        <button type="button" class="slider-btn" aria-label="Назад" @click="prev">
          ‹
        </button>
        <div class="slider-dots" role="tablist">
          <button
            v-for="(s, i) in slides"
            :key="s.id"
            type="button"
            class="dot"
            :class="{ active: i === index }"
            :aria-selected="i === index"
            :aria-label="`Слайд ${i + 1}`"
            @click="index = i"
          />
        </div>
        <button type="button" class="slider-btn" aria-label="Вперёд" @click="next">
          ›
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slider {
  margin: 0 0 1.25rem;
}

.slider-viewport {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow);
  background: var(--surface);
}

.slider-img {
  display: block;
  width: 100%;
  height: clamp(200px, 42vw, 340px);
  object-fit: cover;
  transform: scale(1.02);
}

.slider-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(15, 20, 25, 0.82) 10%,
    rgba(15, 20, 25, 0.35) 55%,
    rgba(15, 20, 25, 0.15) 100%
  );
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.35rem;
  animation: floatUp 0.6s ease both;
}

.slider-kicker {
  margin: 0;
  font-size: 0.85rem;
  color: var(--muted);
  letter-spacing: 0.02em;
}

.slider-title {
  margin: 0;
  font-size: clamp(1.45rem, 4vw, 2rem);
  letter-spacing: -0.03em;
}

.slider-sub {
  margin: 0;
  max-width: 46ch;
  color: #dbeafe;
  font-size: 0.95rem;
  line-height: 1.45;
}

.slider-controls {
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.slider-btn {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(15, 20, 25, 0.55);
  color: var(--text);
  font-size: 1.35rem;
  line-height: 1;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: transform 0.15s ease, background var(--transition);
}

.slider-btn:hover {
  background: rgba(110, 231, 183, 0.18);
}

.slider-btn:active {
  transform: scale(0.96);
}

.slider-dots {
  display: flex;
  gap: 0.35rem;
  align-items: center;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.28);
  transition: transform 0.15s ease, background var(--transition);
}

.dot.active {
  background: var(--accent);
  transform: scale(1.15);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.45s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
}

@media (max-width: 420px) {
  .slider-controls {
    position: static;
    padding: 0.5rem 0.75rem 0.85rem;
    background: rgba(15, 20, 25, 0.65);
  }

  .slider-overlay {
    position: static;
    background: transparent;
    padding-bottom: 0.25rem;
  }

  .slider-viewport {
    display: flex;
    flex-direction: column;
  }

  .slider-img {
    height: 220px;
  }
}
</style>
