import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BlogEdit from '../components/BlogEdit'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin board',
    children: [
      {
        path: '/admin-:id',
        component: BlogEdit,
        props: true
      }
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin-view.vue')

  },
  {
    path: '/admin-create',
    name: 'Admin creation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin-create" */ '../views/Admin-create.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
