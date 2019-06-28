import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, SharedService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [], 
  providers:[
     SidebarService,
     SharedService
  ]
})
export class ServiceModule { }
