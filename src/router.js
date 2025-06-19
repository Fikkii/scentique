import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  { path: '/', component: Home },
  {
    path: '/checkout-success',
    name: 'CheckoutSuccess',
    component: () => import('@/views/CheckoutSuccess.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue')
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})

