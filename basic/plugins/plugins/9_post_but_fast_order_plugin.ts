export default defineNuxtPlugin({
  async setup(nuxtApp) {
    console.log('9_post_but_fast_order_plugin')
  },
  enforce: 'post',
  order: -50
})