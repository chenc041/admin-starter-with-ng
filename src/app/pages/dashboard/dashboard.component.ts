import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule, Validators } from '@angular/forms';
import { SearchComponent } from '~/app/components/search/search.component';

@Component({
  selector: 'app-dashboard',
  imports: [DatePickerModule, FormsModule, SearchComponent],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent {
  formConfig = [
    {
      type: 'input',
      label: '姓名',
      prop: 'name',
      formItem: ['', Validators.required],
    },
    {
      type: 'input',
      label: '昵称',
      prop: 'nickname',
      formItem: ['', Validators.required],
    },
  ];
}
