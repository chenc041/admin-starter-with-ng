import { Component } from '@angular/core';
import { TranslatePipe } from '~/app/pipes/translate.pipe';

@Component({
  selector: 'app-dashboard',
  imports: [TranslatePipe],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {}
