import { vFocus } from './vFocus/index'

import type { App } from 'vue'

export default {
  install(app: App) {
    app.directive(vFocus.name, vFocus.option)
  }
}
