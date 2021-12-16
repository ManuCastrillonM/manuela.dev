import Vue from 'vue'
import App from './App.vue'
import router from './router'

import i18n from '@/i18n'
import '@/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: (h) => h(App)
}).$mount('#app')
