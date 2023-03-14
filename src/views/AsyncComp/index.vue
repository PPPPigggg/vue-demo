<template>
  <div class="box">
    <h1>{{ store.count }}</h1>
    <h1>{{ store.strCount }}</h1>
    <button @click="storeCountAdd">pinia++</button>
    <button @click="router.push({ name: 'attrs', params: { test: 123 } })">
      goAttrs
    </button>
    <button
      @click="router.push({ name: 'keepAlive', params: { test: 'demo' } })"
    >
      goAttrs
    </button>
    <AsyncCmp></AsyncCmp>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, watch } from 'vue'
import SuccessCmp from './components/Success.vue'
import ErrorCmp from './components/Error.vue'
import LoadingCmp from './components/Loading.vue'

import { useCountStore } from '@/stores/counter'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
console.log('route: ', router.getRoutes())

const store = useCountStore()
console.log('store instance: ', store)

function storeCountAdd() {
  // store.addCount()
  store.$patch({
    count: store.count + 1,
    count2: store.count2 + 2
  })
}

watch(
  store.$state,
  (state) => {
    console.log('state: ', state)
  }
  // { deep: true }
)

// const AsyncCmp = defineAsyncComponent(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(SuccessCmp as any)
//     }, 2000)
//   })
// })

const AsyncCmp = defineAsyncComponent({
  // 加载函数
  loader: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(SuccessCmp as any)
        // reject()
      }, 4000)
    })
  },

  // 加载异步组件时使用的组件
  loadingComponent: LoadingCmp,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 200,

  // 加载失败后展示的组件
  errorComponent: ErrorCmp,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000
})
</script>

<style scoped>
.box {
  box-shadow: 5px 5px;
}
</style>
