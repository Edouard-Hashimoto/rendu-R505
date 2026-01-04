// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "~/styles/base.scss",
    "~/styles/main.scss",
    "~/styles/title.scss",
    "~/styles/_button.scss", // important
  ],
  vite: {
    optimizeDeps: {
      include: ['react-compiler-runtime', 'react', 'react-dom'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/styles/foundations/_functions.scss" as *; @use "~/styles/foundations/_variables.scss" as *; @use "~/styles/foundations/_mixins.scss" as *; ',
        },
      },
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxtjs/sanity",
  ],
  sanity: {
    projectId: "73k1zd4f",
    dataset: "production",
    visualEditing: {
      token: process.env.NUXT_SANITY_API_TOKEN, //required
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL, //required
      stega: false,
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: "http://localhost:4000",
    },
  },
});
