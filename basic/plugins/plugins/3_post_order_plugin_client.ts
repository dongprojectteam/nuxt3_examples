export default defineNuxtPlugin({
  async setup(nuxtApp) {
    console.log('3_post_order_plugin_client')
  },
  enforce: 'post'
})