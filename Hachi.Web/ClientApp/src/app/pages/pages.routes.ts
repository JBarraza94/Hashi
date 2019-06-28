import {RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

const pagesRoute:Routes = [
    { path: '', 
      component: PagesComponent,
      children: [
          {path: 'dashboard', component: DashboardComponent},
          {path: 'users', component: UsersComponent},
          {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
                ]
    },
]
export const PAGES_ROUTES = RouterModule.forChild(pagesRoute);