import { ref } from 'vue'

export default {
  count: ref(1),
  addCount() {
    this.count.value++
  },
  subCount() {
    this.count.value--
  }
}
