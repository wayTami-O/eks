# ER-диаграмма «Корочки.есть»

Схема соответствует модели Prisma (`schema.prisma`). Ниже — текстовая диаграмма и как получить графическую **в средстве СУБД** (требование ТЗ п. 1.2).

## Mermaid (для документации и GitHub/GitLab)

```mermaid
erDiagram
  User ||--o{ CourseApplication : "подаёт"
  User ||--o{ Review : "пишет"
  CourseApplication ||--o| Review : "имеет"

  User {
    string id PK
    string login UK
    string passwordHash
    string fullName
    string phone
    string email
    enum role
  }

  CourseApplication {
    string id PK
    string userId FK
    string courseTitle
    datetime startDate
    enum paymentMethod
    enum status
    datetime createdAt
  }

  Review {
    string id PK
    string applicationId FK_UK
    string userId FK
    string content
    datetime createdAt
  }
```

## Как построить диаграмму в pgAdmin 4

1. Запустите проект и примените схему к PostgreSQL (`docker compose up` или `prisma db push`).
2. Подключитесь к базе в pgAdmin.
3. Откройте **Tools → ERD Tool** (или **Generate ERD** в зависимости от версии).
4. Добавьте таблицы `User`, `CourseApplication`, `Review` из схемы `public` и сохраните изображение для отчёта.

Альтернатива: импорт DDL или reverse-engineering в **DBeaver** (ER Diagram для схемы), **DataGrip** и т.п.
