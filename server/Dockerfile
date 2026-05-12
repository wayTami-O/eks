FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lock ./
COPY prisma ./prisma

RUN bun install --frozen-lockfile

COPY src ./src
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh && bunx prisma generate

ENV NODE_ENV=production
ENV PORT=5252

EXPOSE 5252

ENTRYPOINT ["/docker-entrypoint.sh"]
