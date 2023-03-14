<template>
  <span>B</span>
  <input
    type="text"
    v-model="value"
  />

  <button @click="open = true">Open Modal</button>
  <button @click="store.addCount()">store++</button>
  <span>store{{ store.count }}</span>

  <Teleport
    to="body"
    :disabled="false"
  >
    <div
      v-if="open"
      class="modal"
    >
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import store from '../store'
import { ref } from 'vue'
const value = ref('')
const open = ref(false)
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: #000;
}
</style>
