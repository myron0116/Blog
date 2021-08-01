import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import Movie from '../views/movie.vue'

Vue.use(VueRouter)

const routes = [
 { path: '/', redirect: '/home' }, 
 { path: '/home', component: Home},
 { path: '/movie', component: Movie },
]

const router = new VueRouter({
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
   },
  base: process.env.BASE_URL,
  routes,
})

export default router
