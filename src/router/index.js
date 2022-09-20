import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/layout', 
      name: 'layout',
      redirect: '/',
      component: () => import('@/views/layout/index.vue'),
      meta: {
        title: '布局'
      },
      children: [
        { path: '/home', name: 'home', component: () => import('@/views/modules/home/index.vue'), meta: { title: '首页'} },
        { path: '/date', name: 'date', component: () => import('@/views/modules/date/index.vue'), meta: { title: '日期格式化'} },
        { path: '/json', name: 'json', component: () => import('@/views/modules/json/index.vue'), meta: { title: 'JSON格式化'} },
        { path: '/js', name: 'js', component: () => import('@/views/modules/js/index.vue'), meta: { title: 'JS编辑器'} },
        { path: '/base64', name: 'base64', component: () => import('@/views/modules/base64/index.vue'), meta: { title: 'BASE64'} }
      ]
    },
    { path: '/', redirect: { name: 'home' }, meta: { title: '重定向' } },
    { path: '/:pathMatch(.*)', redirect: { name: 'home' } }
  ]
})

export default router
