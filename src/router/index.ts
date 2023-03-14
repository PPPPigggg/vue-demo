import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView/index.vue')
    },
    {
      path: '/attrs/:test?',
      name: 'attrs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AttrsView/index.vue')
    },
    {
      path: '/async',
      name: 'async',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AsyncComp/index.vue')
    },
    {
      path: '/keepAlive/:test?',
      name: 'keepAlive',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/KeepAliveCpm/index.vue')
    },
    {
      path: '/tsCmp',
      name: 'tsCmp',
      component: () => import('../views/TsConponent/index.vue')
    },
    {
      path: '/myJsx',
      name: 'myJsx',
      component: () => import('../views/MyJsx/index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // ...
  // 返回 false 以取消导航
  // return false
  next()
})

export default router
