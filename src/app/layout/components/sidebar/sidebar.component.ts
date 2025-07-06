import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Ripple } from 'primeng/ripple';
import type { Menu } from '~/app/interfaces/menu.interface';
import { TranslatePipe } from '~/app/pipes/translate.pipe';

@Component({
  selector: 'app-sidebar',
  imports: [Ripple, RouterLinkActive, RouterLink, TranslatePipe],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input({ required: true }) menus: Menu[] = [];
}
