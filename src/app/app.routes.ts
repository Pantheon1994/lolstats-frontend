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
        data: { title: 'LOLSTATS.GG | Discover your Carry Score', description: 'Enter your summoner name and see who really made the difference' }
    },
    {
        path: 'match/:matchId/:puuid/:gameName/:tagLine/:region',
        loadComponent: () => import('./match-details/match-details.component').then(mod => mod.MatchDetailsComponent),
        data: { title: 'LOLSTATS.GG | Discover your Carry Score', description: 'Match Detail Discover your Carry Score' }
    },
    {
        path: 'match-history/:gameName/:tagLine/:region',
        loadComponent: () => import('./user/user.component').then(mod => mod.UserComponent),
    },
];
