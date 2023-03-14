<template>
  <h1>{{ store.count }}</h1>
  <h1>{{ store.strCount }}</h1>
  <button @click="store.addCountOption">piniaOption++</button>
  <button @click="store.$reset">pinia reset</button>

  <KeepAlive>
    <ACpm v-if="switchValue"></ACpm>
    <BCpm v-else></BCpm>
  </KeepAlive>
  <button @click="switchValue = !switchValue">switch</button>
</template>

<script lang="ts" setup>
import { ref, onActivated } from 'vue'
import ACpm from './ACpm/index.vue'
import BCpm from './BCpm/index.vue'
import { useCounterOption } from '@/stores/counterOption'
import { useRoute } from 'vue-router'
const store = useCounterOption()

const switchValue = ref(true)

const props = defineProps({
  test: String
})
const route = useRoute()
console.log('props: ', props)
console.log('props: ', route.params.test)
</script>

<style scoped></style>
