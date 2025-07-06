import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/app.layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('~/app/pages/dashboard/dashboard.component'),
      },
      {
        path: 'system',
        children: [
          {
            path: 'log',
            loadComponent: () => import('~/app/pages/system/log/log.component'),
          },
          {
            path: 'dict',
            loadComponent: () => import('~/app/pages/system/dict/dict.component'),
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('~/app/login/login.component'),
  },
  {
    path: 'exception/:type',
    loadComponent: () => import('~/app/exception/exception.component'),
  },
  {
    path: '**',
    loadComponent: () => import('~/app/exception/exception.component'),
  },
];
