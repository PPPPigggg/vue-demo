import type { App } from 'vue'

export default {
  install(val: App) {
    val.provide('seeHi', 'hi')
    val.provide('seeHiHi', 'hi-hi')
  }
}
