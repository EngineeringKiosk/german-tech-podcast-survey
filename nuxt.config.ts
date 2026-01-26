// https://nuxt.com/docs/api/configuration/nuxt-config
const isGithubPages =
  process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";
const appBaseURL =
  process.env.NUXT_APP_BASE_URL || (isGithubPages ? "/german-tech-podcast-survey/" : "/");

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  ssr: true, // Enable SSR for proper static generation with CSS

  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "@nuxt/fonts"],

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./error.vue",
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    baseURL: appBaseURL,
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

  nitro: {
    preset: "github-pages",
  },
});
