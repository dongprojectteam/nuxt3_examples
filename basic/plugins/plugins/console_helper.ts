export default defineNuxtPlugin({
  name: 'Console Log Helper',
  parallel: true,
  enforce: 'pre',
  setup() {
    return {
      provide: {
        warn: (text: string) => console.warn(`[WARN] ${text}`),
        info: (text: string) => console.log(`[INFO] ${text}`)
      }
    }
  }
})