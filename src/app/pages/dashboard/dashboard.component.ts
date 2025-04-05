import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [DatePickerModule, FormsModule],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {
  date: Date | undefined;
}
