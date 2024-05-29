import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      alias: '/',
      path: '/basic',
      name: 'basic',
      component: () => import('../views/BasicStyle.vue')
    },
    {
      path: '/define-expose',
      name: 'define-expose',
      component: () => import('../views/DefineExposeStyle.vue')
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      component: () => import('../views/ProvideInjectStyle.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/StoreStyle.vue')
    }
  ]
})

export default router
