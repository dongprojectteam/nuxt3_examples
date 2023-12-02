export default defineNuxtConfig({
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
})
