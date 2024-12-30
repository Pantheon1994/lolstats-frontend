import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
    },
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),
    },
    {
        path: 'match/:matchId/:puuid',
        loadComponent: () => import('./match-details/match-details.component').then(mod => mod.MatchDetailsComponent),
    },
    {
        path: 'match-history/:gameName/:tagLine/:region',
        loadComponent: () => import('./user/user.component').then(mod => mod.UserComponent),
    },
];
