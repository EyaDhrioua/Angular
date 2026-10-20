import { Routes } from '@angular/router';

export const CONFERENCE_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./conferance-list/conferance-list').then((m) => m.ConferanceList) },
  { path: ':id', loadComponent: () => import('./conferance-details/conferance-details').then((m) => m.ConferanceDetails) },
];
