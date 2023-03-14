<template>
  <div>
    <button @click="handles">click me</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const emit = defineEmits({
  clickData(num) {
    console.log('n222222222um: ', num);
    // if (num === 100) {
    //   return true
    // }
    return false
  }
})
const num = ref(100)

function handles() {
  emit('clickData', num)
}
</script>

<style lang="less" scoped></style>
