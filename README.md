# Корочки.есть

Веб-портал для записи на онлайн-курсы дополнительного профессионального образования: регистрация, авторизация, подача и просмотр заявок, отзывы, панель администратора.

## Стек

| Слой | Технологии |
|------|------------|
| База данных | PostgreSQL 16 |
| ORM | Prisma |
| Backend | [Elysia](https://elysiajs.com/) на [Bun](https://bun.sh/) |
| Frontend | [Nuxt 3](https://nuxt.com/) (Vue 3) |

## Требования

- **Docker Desktop** (или Docker Engine + Compose) — для запуска всего стека или только БД.
- Для разработки без контейнеров API: [Bun](https://bun.sh/). Фронтенд: Node.js 22+ и npm.

## Запуск через Docker (рекомендуется)

Из **корня репозитория**:

```bash
docker compose up --build
```

При первом запуске образ `api` применит схему Prisma к базе (`db push`) и выполнит сид администратора.

### Адреса после старта

| Сервис | URL |
|--------|-----|
| Сайт | http://localhost:6767 |
| API | http://localhost:5252 |
| Проверка API | http://localhost:5252/api/health |
| PostgreSQL | `localhost:5432`, БД `korochki`, пользователь и пароль `korochki` |

### Вход в админ-панель

1. Откройте http://localhost:6767/login  
2. Учётная запись из сида: логин **`Admin`**, пароль **`KorokNET`**  
3. В шапке появится ссылка «Админ» → http://localhost:6767/admin  

Обычные пользователи регистрируются на странице «Регистрация»; админ создаётся только через сид.

### Переменные окружения (Docker)

Файл-пример: [.env.docker.example](.env.docker.example). Скопируйте в `.env` в том же каталоге, что и `docker-compose.yml`, если нужно переопределить значения:

| Переменная | Назначение |
|------------|------------|
| `JWT_SECRET` | Секрет подписи JWT; в продакшене задайте длинную случайную строку. |
| `NUXT_PUBLIC_API_BASE` | Обычно не задавайте: фронт вызывает **`/api` на том же хосте**, Nitro проксирует на сервис `api` (без CORS). Полный URL нужен только для прямых запросов браузера на другой origin — затем **пересоберите** `web`. |

Внутри сети Compose Nuxt обращается к API по `NUXT_API_INTERNAL=http://api:5252` (уже задано в [docker-compose.yml](docker-compose.yml)).

### Остановка

```bash
docker compose down
```

Удалить том с данными PostgreSQL (полный сброс БД):

```bash
docker compose down -v
```

---

## Локальная разработка (API и фронт на машине, БД в Docker)

### 1. База данных

```bash
docker compose up -d db
```

### 2. Backend

```bash
cd server
cp .env.example .env
# Отредактируйте .env: DATABASE_URL, JWT_SECRET
bun install
bunx prisma db push
bun run db:seed
bun run dev
```

API слушает порт **5252** (можно задать `PORT` в `.env`).

### 3. Frontend

```bash
cd web
cp .env.example .env
# NUXT_PUBLIC_API_BASE должен указывать на ваш API, например http://localhost:5252
npm install
npm run dev
```

Сайт: http://localhost:6767 (`npm run dev` задаёт порт 6767).

---

## Схема базы и ER-диаграмма

Описание связей и Mermaid-схема: [server/prisma/ER-diagram.md](server/prisma/ER-diagram.md). Диаграмму в инструменте СУБД (например, pgAdmin ERD) можно построить по развёрнутой базе после `prisma db push`.

---

## Полезные команды

| Задача | Команда |
|--------|---------|
| Только пересобрать образы | `docker compose build` |
| Логи сервиса | `docker compose logs -f api` (или `web`, `db`) |
| Сид вручную (локальный сервер) | `cd server && bun run db:seed` |

## Лицензия и назначение

Учебный/демонстрационный проект по заданию на разработку информационной системы записи на курсы ДПО.
