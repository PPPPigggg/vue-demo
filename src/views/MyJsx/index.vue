<template>
  <JsxVue :key="isKey">
    <template #test>
      <div>123</div>
    </template>
  </JsxVue>
  <MyComponent value="value111"></MyComponent>
  <button @click="isKey = isKey + 1">key</button>
  <button @click="changeColor">change-color</button>
</template>

<script lang="tsx" setup>
import { getCurrentInstance, onMounted, ref, watchEffect, render } from 'vue'
import JsxVue from './Jsx.jsx'

const isKey = ref(1)
let color = ref('#ff0000')

function changeColor() {
  color.value = '#' + Math.random().toString(16).slice(-6)
}

const MyComponent = (props: any) => {
  return <div class='myDiv'>{props.value}</div>
}
MyComponent.props = ['value']

onMounted(() => {
  const instance = getCurrentInstance()
  console.log(instance?.appContext.config.globalProperties.$msg)
  console.log(instance?.proxy?.$msg)
})
</script>

<style scoped>
.myDiv {
  width: 100px;
  height: 100px;
  background-color: v-bind('color');
  transition: background-color 0.5s;
}
.box {
  width: 20px;
  height: 20px;
}
</style>
