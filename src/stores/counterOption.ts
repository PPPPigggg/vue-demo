import { defineStore } from 'pinia'

export const useCounterOption = defineStore('countOPtion', {
  state: () => ({
    count: 1
  }),
  getters:{
    strCount(state){
      return `myCountOption${state.count}`
    }
  },
  actions:{
    addCountOption(){
      this.count++
    }
  }
})
