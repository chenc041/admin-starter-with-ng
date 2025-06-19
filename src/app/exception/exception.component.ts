import { Component, input } from '@angular/core';
import { ErrorPageComponent } from '~/app/components/error-page/error-page.component';

@Component({
	selector: 'app-server-error',
	imports: [ErrorPageComponent],
	templateUrl: './exception.component.html',
})
export default class ExceptionComponent {
	errorCode = input('404', { alias: 'type' });
	errorTitle = '页面不存在';
	errorMessage = '请检查您输入的网址是否正确';
}
