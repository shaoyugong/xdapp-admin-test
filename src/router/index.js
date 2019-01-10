import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'dashboard',
      path: '/home',
      redirect: '/home/index',
      meta: {title: 'dashboard', icon: 'el-icon-ant-dashboard-fill'},
      component: Layout,
      children: [
        {
          name: 'home',
          path: '/home/index',
          meta: {title: 'home'},
          component: () => import('@/views/home/index')
        }, {
          name: 'icon',
          path: '/home/icon',
          meta: {title: 'icon'},
          component: () => import('@/views/home/icon')
        }
      ]
    }, {
      path: '*',
      redirect: '/home/index',
      hidden: true
    }
  ]
})
