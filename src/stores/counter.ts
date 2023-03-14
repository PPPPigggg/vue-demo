import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCountStore = defineStore('count', () => {
  const count = ref(1)
  const count2 = ref(1)
  const strCount = computed(() => `myCount：${count.value}`)

  function addCount() {
    count.value++
  }
  return {
    count2,
    count,
    strCount,
    addCount
  }
})
