export default defineNuxtPlugin({
  enforce: 'post',
  async setup(nuxtApp) {
    console.log('0_post_order_plugin')
  }
})