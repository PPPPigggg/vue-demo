<template>
  <h1>
    {{ count }}
  </h1>
  <h1>{{ strCount }}</h1>
  <button @click="addCount">pinia++</button>
  <AttrsWrap
    class="myClass"
    style="color: red"
    :size="20"
  ></AttrsWrap>
</template>

<script lang="ts" setup>
import AttrsWrap from './components/AttrsWrap.vue'
import { useCountStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
const { count, strCount } = storeToRefs(useCountStore())
const { addCount } = useCountStore()

onMounted(() => {
  const route = useRoute()
  console.log('$route: ', route.params.test)
})
</script>

<style scoped>
.myClass {
  border: 2px solid;
}
</style>
