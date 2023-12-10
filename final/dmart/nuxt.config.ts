// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/index.css', '~/assets/scss/index.scss'],
  components: [
    '~/components/molecules',
    '~/components/molecules/header',
    '~/components/molecules/products',
    {
      path: '~/components/molecules/search',
      prefix: 'Search',
    },
    '~/components/organisms',
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://fakestoreapi.com/',
    },
  },
  modules: ['@nuxt/image'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
})

//
// https://nuxt.com/docs/getting-started/assets
