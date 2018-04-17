import Vue from 'vue'
import App from './App.vue'
import Styles from './scss/main.scss'
import VueParticles from '../node_modules/vue-particles/vue-particles/vue-particles'

Vue.use(VueParticles)

new Vue({
  el: '#app',
  render: h => h(App)
})
