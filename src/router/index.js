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
    name: 'Bio',
    beforeEnter (to, from, next) {
      window.location.replace(
        'https://docs.google.com/document/d/1c_8bzeil0hiYHrFyFNphI_B8ICm07XDAhyOxYiIjf0Y/edit?usp=sharing'
      )
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  publicPath: process.env.NODE_ENV === 'production' ? '/manuela.dev/' : '/'
})

// eslint-disable-next-line no-console
console.log('env: ', process.env.NODE_ENV)

export default router
