export default defineNuxtPlugin({
  async setup(nuxtApp) {
    console.log('2_post_order_plugin_server')
  },
  enforce: 'post'
})