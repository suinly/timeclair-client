import { AuthLayout } from '@/shared/ui/layouts';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home'),
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login'),
    meta: {
      layout: AuthLayout,
      auth: false,
    },
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/register'),
    meta: {
      layout: AuthLayout,
      auth: false,
    },
  },

  {
    path: '/organizations',
    name: 'organizations',
    component: () => import('@/pages/organizations'),
  },

  {
    path: '/organizations/new',
    name: 'organizations-new',
    component: () => import('@/pages/organizations-new'),
  },

  {
    path: '/organizations/:id/edit',
    name: 'organizations-edit',
    component: () => import('@/pages/organizations-edit'),
  },

  {
    path: '/projects/new',
    name: 'projects-new',
    component: () => import('@/pages/projects-new'),
  },

  {
    path: '/projects/:id',
    name: 'projects-id',
    component: () => import('@/pages/projects-id'),
  },

  {
    path: '/issues',
    name: 'issues',
    component: () => import('@/pages/issues'),
  },
];
