import { createRouter, createWebHistory } from 'vue-router'
import Products from '../pages/Products.vue'
import Cart from '../pages/Cart.vue'
import Profile from '../pages/Profile.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
    { path: '/', redirect: '/products' },
    { path: '/products', component: Products },
    { path: '/cart', component: Cart },
    { path: '/profile', component: Profile },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() { return { top: 0 } },
    linkActiveClass: 'active-link'
})

export default router
