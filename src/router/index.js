import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home.vue'
import Resume from '../pages/Resume.vue'
import Talks from '../pages/Talks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/talks',
      name: 'Talks',
      component: Talks
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
