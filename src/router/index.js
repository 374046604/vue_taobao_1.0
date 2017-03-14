import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about/:id',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
