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
      label: '关键词',
      placeholder: '请输入关键词',
      prop: 'keyword',
      formItem: ['', Validators.required],
    },
  ];
}
