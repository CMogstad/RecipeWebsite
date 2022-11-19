import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeView from '../views/RecipeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:categoryId',
      name: 'category',
      component: HomeView
    },
    {
      path: '/recipe/:recipeId',
      name: 'recipe',
      component: RecipeView
    }

  ]
})

export default router
