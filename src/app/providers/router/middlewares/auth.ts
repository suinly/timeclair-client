import { useSessionStore } from '@/entities/session';

export const authRouterMiddleware = (to: any) => {
  const sessionStore = useSessionStore();
  const authRequired = to.meta?.auth !== false;

  if (sessionStore.expiration < Date.now() / 1000) {
    sessionStore.logout();
  }

  if (!sessionStore.isLogged && authRequired) {
    return '/login';
  }

  if (sessionStore.isLogged && !authRequired) {
    return '/';
  }
};
