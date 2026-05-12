function useLabels() {
  function paymentLabel(p) {
    if (p === "CASH") return "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438";
    if (p === "PHONE_TRANSFER") return "\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u043E\u043C \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430";
    return p;
  }
  function statusLabel(s) {
    if (s === "NEW") return "\u041D\u043E\u0432\u0430\u044F";
    if (s === "IN_PROGRESS") return "\u0418\u0434\u0451\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435";
    if (s === "COMPLETED") return "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E";
    return s;
  }
  return { paymentLabel, statusLabel };
}

export { useLabels as u };
//# sourceMappingURL=useLabels-Cidp0rTx.mjs.map
