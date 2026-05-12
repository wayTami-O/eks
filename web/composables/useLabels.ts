export function useLabels() {
  function paymentLabel(p: string) {
    if (p === "CASH") return "Наличными";
    if (p === "PHONE_TRANSFER") return "Переводом по номеру телефона";
    return p;
  }

  function statusLabel(s: string) {
    if (s === "NEW") return "Новая";
    if (s === "IN_PROGRESS") return "Идёт обучение";
    if (s === "COMPLETED") return "Обучение завершено";
    return s;
  }

  return { paymentLabel, statusLabel };
}
