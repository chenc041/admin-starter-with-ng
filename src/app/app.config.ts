import {
  ApplicationConfig,
  InjectionToken,
  isDevMode,
  makeEnvironmentProviders,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  RouterFeatures,
  withComponentInputBinding,
  withDebugTracing,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { provideServiceWorker } from '@angular/service-worker';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from '~/app/interceptors/logging.interceptor';
import { authInterceptor } from '~/app/interceptors/auth.interceptor';
import { I18nServiceService } from '~/app/services/i18n.service.service';

const routeFeatures: RouterFeatures[] = [
  withDebugTracing(),
  withComponentInputBinding(),
  withRouterConfig({
    onSameUrlNavigation: 'reload',
  }),
  withInMemoryScrolling({
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  }),
];

if (!isDevMode()) {
  routeFeatures.push(withViewTransitions());
}

const I18N = new InjectionToken('I18N');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, ...routeFeatures),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideHttpClient(withInterceptors([loggingInterceptor, authInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
        },
      },
      ripple: true,
    }),
    makeEnvironmentProviders([I18nServiceService]),
  ],
};
