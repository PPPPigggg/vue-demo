<template>
  <span>{{ title }}</span>
</template>

<script lang="ts" setup>
import { ref, onActivated } from 'vue'
const title = ref('')

onActivated(() => {
  console.log(2222);
  title.value = 'title!'
})
</script>

<style scoped></style>
