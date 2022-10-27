import { defineStore } from "pinia"

export const useMainStore = defineStore('counter', {
  state: () => ({
    drawer: true
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
})
