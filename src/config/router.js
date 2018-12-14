import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home/Index',
      component: Layout,
      children: [
        {
          path: '/home/Index',
          component: () => import('@/views/home/Index'),
          name: 'index',
          meta: {
            title: 'index',
            icon: 'index',
            noCache: true
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/home/Index',
      hidden: true
    }
  ]
})
