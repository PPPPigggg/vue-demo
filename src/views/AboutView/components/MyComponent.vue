<template>
  <p :class="$attrs.class">pppp</p>
  <ul
    id="listUl"
    :ref="li1"
  >
    <li
      v-for="item in list"
      :key="item"
      :id="`li${item}`"
      :ref="`li${item}`"
    >
      {{ item }}
    </li>
  </ul>
  <button @click="addDiv">ADDDDDD</button>
  <button @click="listIndex++">num+++</button>
  <button @click="obj.names.list++">23123</button>
</template>

<script setup lang="ts">
import {
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  reactive,
  nextTick,
  ref,
  onMounted,
  defineExpose
} from 'vue'

const listIndex = ref(1)
const list = reactive<any[]>([1, 2, 3, 4, 5])

function addDiv() {
  listIndex.value++
  list.push(listIndex.value)
}

const obj = reactive({
  names: {
      list: 1
  }
})

// watch(
//   listIndex,
//   (val, oldVal) => {
//     console.log('val: ', val)
//     console.log('oldVal: ', oldVal)
//     // console.log(document.querySelector(`#li${listIndex.value}`))
//   },
//   { flush: 'post' }
// )
const li1 = (el: unknown) => {
  console.log('el: ', el)
}

defineExpose({
  addDiv
})
</script>

<style lang="scss" scoped></style>
