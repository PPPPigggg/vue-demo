<template>
  <h5>加载中。。。</h5>
</template>
<script setup lang="ts">
const emit = defineEmits<{ (e: 'change', title: string): void }>()
emit('change', '222')
</script>

<style lang="" scoped></style>
