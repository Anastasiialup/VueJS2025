import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NotFound from '../views/NotFound.vue'
import AdminLayout from '../views/admin/AdminLayout.vue'

const Dashboard = () => import('../views/admin/Dashboard.vue')
const Users = () => import('../views/admin/Users.vue')
const UserDetails = () => import('../views/admin/UserDetails.vue')
const Reports = () => import('../views/admin/Reports.vue')

const routes = [
  { path: '/', component: Home, meta: { public: true } },
  { path: '/login', component: Login, meta: { public: true, onlyGuest: true } },
  { path: '/register', component: Register, meta: { public: true, onlyGuest: true } },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'dashboard', component: Dashboard, meta: { keepAlive: true } },
      { path: 'users', component: Users, meta: { keepAlive: true } },
      { path: 'user/:id', component: UserDetails },
      { path: 'reports', component: Reports }
    ]
  },
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { public: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const user = !!localStorage.getItem('user')

  // Якщо маршрут потребує авторизації
  if (to.meta.requiresAuth && !user) return next('/login')

  // Якщо маршрут для гостей, але користувач вже авторизований
  if (to.meta.onlyGuest && user) return next('/admin/dashboard')

  next()
})

export default router
