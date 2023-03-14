<template>
  <SuccessCmp></SuccessCmp>
  <ErrorCmp text="errorText"></ErrorCmp>
  <LoadingCmp></LoadingCmp>
</template>

<script setup lang="ts">
import { provide, inject } from 'vue'

import type { InjectionKey } from 'vue'

import SuccessCmp from './components/Success.vue'
import ErrorCmp from './components/Error.vue'
import LoadingCmp from './components/Loading.vue'

const key = 'myKey' as string

provide(key, 'string')
</script>

<style scoped></style>
