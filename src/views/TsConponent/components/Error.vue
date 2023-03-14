<template>
  <h1 style="color: red">{{ props.title }}</h1>
  <h2>{{ props.text }}</h2>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
    title?: string
  }>(),
  {
    title: '默认错误title'
  }
)
</script>

<style lang="" scoped></style>
