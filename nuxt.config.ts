// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  ssr: false, // SPA mode for client-side state management

  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "@nuxt/fonts"],

  app: {
    head: {
      htmlAttrs: {
        lang: "de",
      },
      title: "Deutschsprachige Tech-Podcast Umfrage",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Anonyme Umfrage zu deutschsprachigen Tech-Podcasts",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      surveyApiUrl: process.env.NUXT_PUBLIC_SURVEY_API_URL || "/api/survey",
    },
  },
});
