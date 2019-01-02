import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home/index',
      component: Layout,
      children: [
        {
          path: '/home/index',
          component: () => import('@/views/home/index'),
          name: 'index',
          meta: {
            title: 'index',
            icon: 'index',
            noCache: true
          }
        },
        {
          path: '/home/test',
          component: () => import('@/views/home/test'),
          name: 'test1',
          meta: {
            title: 'test',
            icon: 'test',
            noCache: true
          }
        }
      ]
    }, {
      path: '/home/test',
      component: Layout,
      children: [
        {
          path: '/home/test',
          component: () => import('@/views/home/test'),
          name: 'test2',
          meta: {
            title: 'test',
            icon: 'test',
            noCache: true
          }
        },
        {
          path: '/home/test',
          component: () => import('@/views/home/test'),
          name: 'test3',
          meta: {
            title: 'test',
            icon: 'test',
            noCache: true
          }
        },
        {
          path: '/home/test',
          component: () => import('@/views/home/test'),
          name: 'test4',
          meta: {
            title: 'test',
            icon: 'test',
            noCache: true
          }
        }
      ]
    }, {
      path: '*',
      redirect: '/home/index',
      hidden: true
    }
  ]
})
