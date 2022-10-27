import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueCompositionAPI from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)
Vue.use(PiniaVuePlugin)

const pinia = createPinia()

new Vue({
  pinia,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
