import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CartPage from '../views/CartPage.vue';
import FavoritesPage from '../views/FavoritesPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/carrinho', component: CartPage },
  { path: '/favoritos', component: FavoritesPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
