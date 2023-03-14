import { onMounted, onUnmounted } from 'vue'

export default function (
  target: Window | Element,
  event: string,
  callBack: (e: any) => void
) {
  onMounted(() => target.addEventListener(event, callBack))
  onUnmounted(() => target.removeEventListener(event, callBack))
}
