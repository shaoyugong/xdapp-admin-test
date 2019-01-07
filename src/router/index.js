import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      title: '总览',
      path: '/home/index',
      icon: 'el-icon-ant-dashboard-fill',
      component: Layout,
      children: [
        {
          title: '主页',
          path: '/home/index',
          icon: 'el-icon-ant-home',
          component: () => import('@/views/home/index')
        }, {
          title: '图标',
          path: '/home/icon',
          icon: 'el-icon-ant-tags-fill',
          component: () => import('@/views/home/icon')
        }
      ]
    }, {
      title: '标签',
      path: '/home/icon?=1',
      icon: 'el-icon-ant-tags-fill',
      component: () => import('@/views/home/icon'),
      children: [
        {
          title: '测试1',
          path: '/home/icon?=2',
          icon: 'el-icon-ant-tags-fill',
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
