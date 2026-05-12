// https://nuxt.com/docs/api/configuration/nuxt-config

/** Куда Nitro проксирует /api (SSR при необходимости ходит напрямую через apiInternal). */
const apiUpstream =
  process.env.NUXT_API_INTERNAL?.replace(/\/$/, "") || "http://127.0.0.1:5252";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-01",
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Корочки.есть",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Запись на курсы дополнительного профессионального образования",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap",
        },
      ],
    },
  },
  runtimeConfig: {
    /** Серверные запросы из Nitro (Docker): http://api:5252 */
    apiInternal: "",
    public: {
      /** Пусто — запросы из браузера на тот же origin (/api → прокси на apiUpstream). */
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? "",
    },
  },
  nitro: {
    routeRules: {
      "/api/**": { proxy: `${apiUpstream}/api/**` },
    },
  },
});
