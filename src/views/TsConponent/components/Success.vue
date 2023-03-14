<template>
  <h1 style="color: green">{{ success }}</h1>
  <div ref="h1Dom"></div>
</template>
<script setup lang="ts">
import { computed, inject, ref } from 'vue'

const success = computed<string>(() => '成功')

const foo = inject<string>('myKey')

const h1Dom = ref<HTMLDivElement | null>(null)
</script>

<style lang="" scoped></style>
