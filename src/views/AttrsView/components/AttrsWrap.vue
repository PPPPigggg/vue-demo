<template>
  <AttrsItem></AttrsItem>
</template>

<script lang="ts" setup>
import AttrsItem from './AttrsItem.vue'

const props = defineProps({
  size: Number
})
console.log('props.size11', props.size)
</script>

<style scoped></style>
