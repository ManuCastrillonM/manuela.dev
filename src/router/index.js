import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import WhatDoIUse from '../views/WhatDoIUse.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/what-do-i-use',
    name: 'What do I use',
    component: WhatDoIUse
  },
  {
    path: '/bio',
    beforeEnter (to, from, next) {
      window.location.replace(
        'https://docs.google.com/document/d/1bPyrV5KaguAS1-Orz0rejRSKGuOcWHVQnjuIqMoPNrU/edit?usp=sharing'
      )
    }
  },
  {
    path: '/schedule',
    beforeEnter (to, from, next) {
      window.location.replace(
        'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0SDKHlBMt9O88o-w0rj89mmk8FfaspqJvJ3lnJskcAw_v4HE31o2XQg3Kw5jcb57l0M8Xpu_nk'
      )
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
