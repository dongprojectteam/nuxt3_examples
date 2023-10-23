// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/class_abbr.css', '~/assets/index.css'],
  components: ['~/components/molecules'],
  imports: {
    dirs: ['composables/**'],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'https://fakestoreapi.com/',
    },
  },
})
