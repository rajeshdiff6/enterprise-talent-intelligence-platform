import { Routes } from '@angular/router';
import { authGuard } from '../core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../core/layout/layout.component')
        .then(m => m.LayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'candidates',
        loadChildren: () =>
          import('../features/candidates/candidates.routes')
            .then(m => m.CANDIDATES_ROUTES)
      },
      {
        path: '',
        redirectTo: 'candidates',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../features/auth/login.component')
        .then(m => m.LoginComponent)
  }
];
