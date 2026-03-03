import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(c => c.Home)
  },
  {
    path: 'projetos',
    loadComponent: () => import('./features/projects/projects').then(c => c.Projects)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./features/sobre/sobre').then(c => c.Sobre)
  },
  {
    path: 'contato',
    loadComponent: () => import('./features/contact/contact').then(c => c.Contact)
  },
  { path: '**', redirectTo: '' } // Fallback para home
];
