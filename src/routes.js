import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import Qwiz from '@/pages/Qwiz'

// Routering
export default new Router({
  mode: 'history',

  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/qwiz',
      name: 'qwiz',
      component: Qwiz
    }
  ]
})
