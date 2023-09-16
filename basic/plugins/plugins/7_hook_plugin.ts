export default defineNuxtPlugin({
  async setup(nuxtApp) {
    console.log('7_hook_plugin')
  },
  hooks: {
    'app:created'() {
      console.log('app_created by 7_hook_plugin')
    }
  }
})