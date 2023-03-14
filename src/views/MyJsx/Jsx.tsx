import { h, ref, defineComponent, onMounted } from 'vue'
import STYLE from './style/myCss.module.css'

const divs = (slots: any) => (
  <>
    <div class={STYLE.box}>{slots.test()}</div>
    <div class={STYLE.box}>div</div>
    <div class={STYLE.box}>div</div>
  </>
)

const spans = (slots: any) => (
  <>
    <span>{slots.test()}</span>
    <span>span</span>
    <span>span</span>
  </>
)

export default defineComponent({
  setup(prop, { slots }) {
    onMounted(() => {
      console.log('onMounted2');
    })
    const isOk = ref(true)
    return () => <>{isOk.value ? divs(slots) : spans(slots)}</>
  }
})
