import { createRouter, createWebHistory } from 'vue-router'
import UserAdminView from '../views/UserAdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'admin',
      component: UserAdminView,
    },
    
  ],
})

export default router
