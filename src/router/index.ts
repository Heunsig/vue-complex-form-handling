import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      alias: '/',
      path: '/basic',
      name: 'basic',
      component: () => import('../views/BasicPattern.vue')
    },
    {
      path: '/define-expose',
      name: 'define-expose',
      component: () => import('../views/DefineExposePattern.vue')
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      component: () => import('../views/ProvideInjectPattern.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/StorePattern.vue')
    }
  ]
})

export default router
