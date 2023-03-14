import { ref } from 'vue'
import type { Ref } from 'vue'

import useEvent from './useEvent'

export default function (): Record<string, Ref<number>> {
  const x = ref(0)
  const y = ref(0)

  useEvent(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })

  return {
    x,
    y
  }
}
