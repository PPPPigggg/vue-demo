<template>
  <div>
    <header v-bind="$attrs">{{ $attrs }}</header>
    <main v-bind="$attrs">main</main>
    <footer>footer</footer>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  size: Number
})
console.log('props.size', props.size)
</script>

<style scoped></style>
