import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    },
    {
        path: 'not-found',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    },
    {
        path: '',
        component: MainComponent,
        children:[
           {
            path: 'home',
            loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
           },
           {
            path: 'categories',
            loadComponent: () => import('./pages/categories/categories.component').then(m => m.CategoriesComponent),
           },
           {
            path: 'home',
            loadComponent: () => import('./pages/analytics/analytics.component').then(m => m.AnalyticsComponent),
           },
           {
            path: 'home',
            loadComponent: () => import('./pages/transactions/transactions.component').then(m => m.TransactionsComponent),
           } 
        ]
    }
];
