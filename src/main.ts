import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '~/app/app.component';
import { appConfig } from '~/app/app.config';

/**
 * disable console in prod
 */
if (!isDevMode()) {
	const logType: ['log', 'warn', 'error'] = ['log', 'warn', 'error'];
	for (const type of logType) {
		window.console[type] = () => {};
	}
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
	console.error(err),
);
