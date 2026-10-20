import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'conferences',
    loadChildren: () => import('./conferences.routes').then((m) => m.CONFERENCE_ROUTES),
  },
  { path: 'list', pathMatch: 'full', redirectTo: 'conferences' },
  {
    path: 'registration',
    pathMatch: 'full',
    loadComponent: () => import('./registration/registration').then((m) => m.Registration),
  },
  {
    path: 'registration/confirmation',
    loadComponent: () => import('./registration-confirmation/registration-confirmation').then((m) => m.RegistrationConfirmation),
  },
  {
    path: 'contact',
    loadComponent: () => import('./info-page/info-page').then((m) => m.InfoPage),
    data: { title: 'Contact', description: 'Contactez notre équipe pour toute question concernant les conférences.' },
  },
  {
    path: 'profile',
    loadComponent: () => import('./info-page/info-page').then((m) => m.InfoPage),
    data: { title: 'Profil utilisateur', description: 'Votre espace personnel sera disponible ici.' },
  },
  { path: '**', loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound) },
];
