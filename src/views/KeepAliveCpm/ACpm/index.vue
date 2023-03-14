<template>
  <button @click="store.subCount()">store--</button>
  <span>store{{ store.count }}</span>
  <span>
    <ATitle></ATitle>
  </span>

  <input
    type="text"
    v-model="value"
  />
</template>

<script lang="ts" setup>
import store from '../store'

import { ref, onActivated, nextTick } from 'vue'
import ATitle from './component/ATitle.vue'
const value = ref('')
onActivated(() => {
  console.log(1111)
})
</script>

<style scoped></style>
