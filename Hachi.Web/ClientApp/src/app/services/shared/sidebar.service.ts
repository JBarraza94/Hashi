import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu:any = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      url: '/dashboard',
      sub: false,
      submenu: []
    },
    {
      title: 'Administración',
      icon: 'mdi mdi-folder-multiple-outline',
      url: '',
      sub: true,
      submenu : [
        {title: 'Usuarios', url: '/users'}
      ]
    }
    ];

  constructor() { }

}
