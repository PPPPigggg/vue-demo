<template>
  <button @click="emit('update:myModel', '修改')">修改</button>
</template>

<script setup lang="ts">
const props = defineProps({
  myModelModifiers: {
    type: String
  },
  myModel: {
    type: String
  }
})

const emit = defineEmits(['update:myModelModifiers', 'update:myModel'])

console.log('props: ', props.myModelModifiers)
console.log('props: ', props.myModel)
</script>

<style scoped></style>
