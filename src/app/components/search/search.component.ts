import { ChangeDetectionStrategy, Component, inject, input, type OnInit, output } from '@angular/core';
import { type AbstractControl, FormBuilder, type FormGroup, ReactiveFormsModule, type ValidationErrors } from '@angular/forms';
import { ButtonDirective, ButtonLabel } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';
import { TranslatePipe } from '~/app/pipes/translate.pipe';

export interface FormConfig {
  type: string;
  label: string;
  prop: string;
  formItem: (string | ((control: AbstractControl) => ValidationErrors | null))[];
}

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule, InputText, ButtonDirective, ButtonLabel, Ripple, TranslatePipe, FloatLabel, ButtonDirective],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  /**
   * 响应表单
   */
  searchForm!: FormGroup;

  /**
   * 表单构建
   */
  formBuilder = inject(FormBuilder);

  /**
   * 外部传入的表单配置
   */
  formConfig = input<FormConfig[]>([]);

  /**
   * 响应表单提交事件
   */
  onSubmit = output();

  /**
   * 响应表单重置事件
   */
  onReset = output();

  /**
   * 组件初始化
   */
  ngOnInit() {
    const formGroup = this.formConfig().reduce(
      (acc, cur) => {
        acc[cur.prop] = cur.formItem;
        return acc;
      },
      {} as Record<string, (string | ((control: AbstractControl) => ValidationErrors | null))[]>,
    );
    this.searchForm = this.formBuilder.group(formGroup);
  }

  /**
   * 响应表单提交事件
   */
  handleSearch() {
    console.log(this.searchForm.value);
    if (this.searchForm.valid) {
      this.onSubmit.emit(this.searchForm.value);
    }
  }

  /**
   * 响应表单重置事件
   */
  handleReset() {
    this.searchForm.reset();
    this.onReset.emit();
  }
}
