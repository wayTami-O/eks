export function validateLogin(v: string) {
  if (v.length < 6) return "Логин: минимум 6 символов";
  if (!/^[a-zA-Z0-9]+$/.test(v)) return "Логин: только латиница и цифры";
  return null;
}

export function validatePassword(v: string) {
  if (v.length < 8) return "Пароль: минимум 8 символов";
  return null;
}

export function validateFullName(v: string) {
  const t = v.trim();
  if (!t) return "Укажите ФИО";
  if (!/^[а-яА-ЯёЁ\s]+$/.test(t)) return "ФИО: только кириллица и пробелы";
  return null;
}

export function validatePhone(v: string) {
  if (!/^8\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(v))
    return "Телефон: формат 8(XXX)XXX-XX-XX";
  return null;
}

export function validateEmail(v: string) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Некорректный email";
  return null;
}

/** Совпадает с `createApplicationSchema` на сервере. */
export function validateCourseTitle(v: string) {
  const t = v.trim();
  if (t.length < 3) return "Название курса: минимум 3 символа";
  if (t.length > 200) return "Название курса: не более 200 символов";
  return null;
}
