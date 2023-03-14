<template>
  <div class="about">
    <input
      type="text"
      v-focus
    />
    <MyProps
      title="title"
      disable
    ></MyProps>
    <MyComponent
      class="red"
      style="color: green"
      ref="MyComp"
    ></MyComponent>
    <MyEmit @clickData="emitClickData"></MyEmit>
    <MyModel v-model:myModel.myModifier="myModel"></MyModel>
    <h1>MyModel====：{{ myModel }}</h1>
    <!-- 错误 -->
    <h1>{{ message }}</h1>
    <h1>{{ `x：${x}  y：${y}` }}</h1>
    <h1>$msg{{ $msg }}</h1>
    <button @click="message = 10">222</button>
    <button @click="num++">1111</button>
  </div>
</template>

<script setup lang="ts">
import MyComponent from './components/MyComponent.vue'
import MyEmit from './components/MyEmit.vue'
import MyModel from './components/MyModel.vue'
import MyProps from './components/MyProps.vue'

import {
  reactive,
  nextTick,
  ref,
  computed,
  onMounted,
  onRenderTracked
} from 'vue'

import useMouse from '@/hooks/useMouse'

import { useRoute, useRouter } from 'vue-router'
console.log('useRoute: ', useRoute())
console.log('useRouter: ', useRouter())

const { x, y } = useMouse()

const num = ref(1)
// const num2 = ref(1)
// const message = computed(() => {
//   return num.value + num2.value
// })

const message = computed({
  get() {
    return num.value
  },
  set(val) {
    num.value += val
  }
})

// const test = (el: unknown) => {
//   console.log(122233, el)
// }

function emitClickData(num: { value: any }) {
  console.log('num: ', num.value)
}

const myModel = ref('myModel')

const MyComp = ref<InstanceType<typeof MyComponent> | null>(null)
console.log('MyComp111: ', MyComp.value?.addDiv)
</script>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;

    min-height: 100vh;
  }
}

.red {
  color: red;
}
</style>
