import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/app.layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component'),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component'),
  },
  {
    path: '403',
    loadComponent: () => import('./exception/forbidden/forbidden.component'),
  },
  {
    path: '500',
    loadComponent: () => import('./exception/server-error/server-error.component'),
  },
  {
    path: '**',
    loadComponent: () => import('./exception/not-found/not-found.component'),
  },
];
