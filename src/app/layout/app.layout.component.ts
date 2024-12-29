import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '~/app/layout/components/header/header.component';
import { Menu } from '~/app/interfaces/menu';
import { SidebarComponent } from '~/app/layout/components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.layout.component.html',
})
export default class AppLayoutComponent {
  dataSource: Menu[] = [
    {
      id: 1,
      name: 'Dashboard',
      path: '',
    },
    {
      id: 2,
      name: '系统管理',
      path: 'system',
      children: [
        {
          id: 1,
          path: 'log',
          name: '系统日志',
        },
        {
          id: 2,
          path: 'dict',
          name: '字典管理',
        },
      ],
    },
  ];
}
