import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/create',
      name: 'create new task',
      component: () => import('../views/CreateTask.vue')
    },
    {
      path: '/task/:id',
      name: 'view task',
      component: () => import('../views/ViewTask.vue')
    }
  ]
})

export default router
