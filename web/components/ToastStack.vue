<script setup lang="ts">
const { items, dismiss } = useToast();
</script>

<template>
  <Teleport to="body">
    <div class="toast-host" aria-live="polite">
      <TransitionGroup name="toast">
        <div
          v-for="t in items"
          :key="t.id"
          class="toast"
          :data-type="t.type"
          role="status"
        >
          <span class="toast-msg">{{ t.message }}</span>
          <button type="button" class="toast-x" @click="dismiss(t.id)">
            ×
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.toast-host {
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 9999;
  pointer-events: none;
  max-width: min(420px, calc(100vw - 32px));
}

.toast {
  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 0.85rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(26, 34, 45, 0.94);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
  animation: floatUp 0.35s ease both;
}

.toast[data-type="success"] {
  border-color: rgba(52, 211, 153, 0.35);
}

.toast[data-type="error"] {
  border-color: rgba(251, 113, 133, 0.45);
}

.toast-msg {
  font-size: 0.9rem;
  line-height: 1.35;
}

.toast-x {
  border: none;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 1;
  padding: 0;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.25s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 420px) {
  .toast-host {
    left: 12px;
    right: 12px;
    bottom: 12px;
    max-width: none;
  }
}
</style>
