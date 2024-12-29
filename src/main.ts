import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '~/app/app.config';
import { AppComponent } from '~/app/app.component';
import { isDevMode } from '@angular/core';

/**
 * disable console in prod
 */
if (!isDevMode()) {
  const logType: ['log', 'warn', 'error'] = ['log', 'warn', 'error'];
  for (const type of logType) {
    window.console[type] = () => {};
  }
}

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
