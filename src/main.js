import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './scss/main.scss'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router: router,
  render: h => h(App)
})
