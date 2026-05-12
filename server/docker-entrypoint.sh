#!/usr/bin/env sh
set -e

echo "[api] prisma db push…"
bunx prisma db push

echo "[api] seed…"
bun run db:seed

echo "[api] start…"
exec bun run src/index.ts
