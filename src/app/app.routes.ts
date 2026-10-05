import { Routes } from '@angular/router';
import { ConferanceList } from './conferance-list/conferance-list';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
    data: { title: 'Accueil' },
  },
  {
    path: 'list',
    component: ConferanceList,
    data: { title: 'Conférences' },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
