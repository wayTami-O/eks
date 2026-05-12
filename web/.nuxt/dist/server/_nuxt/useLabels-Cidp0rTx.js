function useLabels() {
  function paymentLabel(p) {
    if (p === "CASH") return "Наличными";
    if (p === "PHONE_TRANSFER") return "Переводом по номеру телефона";
    return p;
  }
  function statusLabel(s) {
    if (s === "NEW") return "Новая";
    if (s === "IN_PROGRESS") return "Идёт обучение";
    if (s === "COMPLETED") return "Обучение завершено";
    return s;
  }
  return { paymentLabel, statusLabel };
}
export {
  useLabels as u
};
//# sourceMappingURL=useLabels-Cidp0rTx.js.map
