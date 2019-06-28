import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { UsersComponent } from './users/users.component';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        UsersComponent
    ],
    exports:[
        DashboardComponent,
        UsersComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]
})
export class PagesModule {}