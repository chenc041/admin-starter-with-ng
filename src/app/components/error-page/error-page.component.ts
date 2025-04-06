import { Component, input } from '@angular/core';
import { TranslatePipe } from '~/app/pipes/translate.pipe';

@Component({
  selector: 'app-error-page',
  imports: [TranslatePipe],
  templateUrl: './error-page.component.html',
})
export class ErrorPageComponent {
  errorCode = input();
  errorTitle = input();
  errorMessage = input();
}
