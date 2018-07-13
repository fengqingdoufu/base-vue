import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/home')
    },
    {
      path: '/test',
      name: 'home',
      component: () => import('@/pages/test/test')
    }
  ]
})
