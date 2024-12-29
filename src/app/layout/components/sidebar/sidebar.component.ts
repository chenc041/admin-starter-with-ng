import { Component, Input } from '@angular/core';
import { Ripple } from 'primeng/ripple';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Menu } from '~/app/interfaces/menu';
import { TranslatePipe } from '~/app/pipes/translate.pipe';

@Component({
  selector: 'app-sidebar',
  imports: [Ripple, RouterLinkActive, RouterLink, TranslatePipe],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input({ required: true }) menus: Menu[] = [];
}
