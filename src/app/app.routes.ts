import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(c => c.Home), pathMatch: 'full',
    data: { title: 'Wilson Oliveira | Home', description: 'Bem-vindo ao meu portfólio.' }
  },
  {
    path: 'projetos',
    loadComponent: () => import('./features/projects/projects').then(c => c.Projects),
    data: { title: 'Projetos | Wilson Oliveira', description: 'Confira meus projetos Full Stack.' }
  },
  {
    path: 'sobre',
    loadComponent: () => import('./features/sobre/sobre').then(c => c.Sobre),
    data: { title: 'Sobre | Wilson Oliveira', description: 'Confira mais informacoes sobre mim.' }
  },
  {
    path: 'contato',
    loadComponent: () => import('./features/contact/contact').then(c => c.Contact),
    data: { title: 'Contato | Wilson Oliveira', description: 'Confira mais informacoes de contato.' }
  },
  { path: '**', redirectTo: '' } // Fallback para home
];
