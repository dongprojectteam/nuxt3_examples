export default defineNuxtPlugin({
  async setup(nuxtApp) {
    console.log('4_late_order_plugin')
  },
  order: 500
})