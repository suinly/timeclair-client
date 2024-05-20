import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { authRouterMiddleware } from './middlewares/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'is-active',
  linkActiveClass: 'is-active',
});

router.beforeEach(authRouterMiddleware);

export { router };
