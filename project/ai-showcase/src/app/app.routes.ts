import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page').then((m) => m.HomePage),
  },
  {
    path: 'angular',
    loadComponent: () =>
      import('./features/framework-angular/pages/framework-angular-page/framework-angular-page').then(
        (m) => m.FrameworkAngularPage,
      ),
  },
  {
    path: 'react',
    loadComponent: () =>
      import('./features/framework-react/pages/framework-react-page/framework-react-page').then(
        (m) => m.FrameworkReactPage,
      ),
  },
  {
    path: 'nextjs',
    loadComponent: () =>
      import('./features/framework-nextjs/pages/framework-nextjs-page/framework-nextjs-page').then(
        (m) => m.FrameworkNextjsPage,
      ),
  },
  { path: '**', redirectTo: '' },
];
