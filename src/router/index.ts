import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/home/homeIndex.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/loginIndex.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
