import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import globAttrs from '@/plugins/globAttrs'
import directives from '@/directives'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(globAttrs)
app.use(directives)
app.config.globalProperties.$msg = 'hello'

app.mount('#app')
// app.unmount()
