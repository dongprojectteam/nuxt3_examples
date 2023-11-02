export default defineNuxtConfig({
  css: ['~/assets/index.css', '~/assets/scss/index.scss'],
  components: [
    '~/components/molecules',
    '~/components/molecules/header',
    '~/components/molecules/products',
  ],
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
