import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomePage),
  },
  {
    path: 'tim-kiem',
    loadComponent: () =>
      import('./pages/search-results/search-results').then((m) => m.SearchResultsPage),
  },
  {
    path: 'bat-dong-san/:slug',
    loadComponent: () =>
      import('./pages/property-detail/property-detail').then((m) => m.PropertyDetailPage),
  },
  {
    path: 'du-an/:slug',
    loadComponent: () =>
      import('./pages/project-detail/project-detail').then((m) => m.ProjectDetailPage),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFoundPage),
  },
];
