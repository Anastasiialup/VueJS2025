import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Article from '../pages/Article.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/article/:id', component: Article },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
})

export default router
