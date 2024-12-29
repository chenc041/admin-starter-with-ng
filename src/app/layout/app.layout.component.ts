import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Ripple } from 'primeng/ripple';

export interface Menu {
  id: number;
  name?: string;
  path: string;
  children?: Menu[];
}
@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet, Ripple, RouterLinkActive],
  templateUrl: './app.layout.component.html',
  styleUrl: './app.layout.component.scss',
})
export default class AppLayoutComponent {
  dataSource: Menu[] = [
    {
      id: 1,
      name: 'dashboard',
      path: 'dashboard',
    },
    {
      id: 2,
      name: '系统管理',
      path: 'system',
      children: [
        {
          id: 1,
          path: 'settings',
          name: '设置',
        },
      ],
    },
  ];
}
