export default defineNuxtPlugin({
  async setup(nuxtApp) {
    console.log('6_pre_order_plugin')
  },
  enforce: 'pre'
})