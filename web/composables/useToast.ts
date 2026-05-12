export type ToastItem = {
  id: number;
  message: string;
  type: "success" | "error" | "info";
};

export function useToast() {
  const items = useState<ToastItem[]>("toast-items", () => []);
  let seq = 0;

  function push(
    message: string,
    type: ToastItem["type"] = "info",
    ms = 3800,
  ) {
    const id = ++seq;
    items.value = [...items.value, { id, message, type }];
    if (ms > 0) {
      setTimeout(() => {
        items.value = items.value.filter((t) => t.id !== id);
      }, ms);
    }
  }

  function dismiss(id: number) {
    items.value = items.value.filter((t) => t.id !== id);
  }

  return { items, push, dismiss };
}
