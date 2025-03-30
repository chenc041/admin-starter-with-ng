import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error-page',
  imports: [],
  templateUrl: './error-page.component.html',
})
export class ErrorPageComponent {
  errorCode = input();
  errorTitle = input();
  errorMessage = input();
}
