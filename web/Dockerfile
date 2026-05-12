FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG NUXT_PUBLIC_API_BASE=
ENV NUXT_PUBLIC_API_BASE=$NUXT_PUBLIC_API_BASE
ARG NUXT_API_INTERNAL=http://api:5252
ENV NUXT_API_INTERNAL=$NUXT_API_INTERNAL
ENV NODE_ENV=production

RUN npm run build

FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=6767

COPY --from=build /app/.output ./.output

EXPOSE 6767

CMD ["node", ".output/server/index.mjs"]
