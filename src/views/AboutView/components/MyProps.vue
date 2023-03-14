<template>
  <div>
    <h1 v-show="disable">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'default'
  },
  disable: {
    type: Boolean
  }
})

console.log(props.title);
console.log(props.disable);


</script>

<style scoped></style>
