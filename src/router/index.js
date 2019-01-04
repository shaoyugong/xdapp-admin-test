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
      icon: 'el-icon-ant-dashboard',
      component: Layout,
      children: [
        {
          title: '主页',
          path: '/home/index',
          icon: 'el-icon-ant-home',
          component: () => import('@/views/home/index')
        }, {
          title: 'test',
          path: '/home/test',
          icon: 'el-icon-ant-tags-fill',
          component: () => import('@/views/home/test')
        }
      ]
    }, {
      title: '标签',
      path: '/home/test?=1',
      icon: 'el-icon-ant-tags-fill',
      component: () => import('@/views/home/test'),
      children: [
        {
          title: '测试1',
          path: '/home/test?=2',
          icon: 'el-icon-ant-tags-fill',
          component: () => import('@/views/home/test')
        }
      ]
    }, {
      path: '*',
      redirect: '/home/index',
      hidden: true
    }
  ]
})
