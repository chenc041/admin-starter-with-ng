import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { type ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideRouter,
  type RouterFeatures,
  withComponentInputBinding,
  withDebugTracing,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { authInterceptor } from '~/app/interceptors/auth.interceptor';
import { loggingInterceptor } from '~/app/interceptors/logging.interceptor';
import zh_CN from '~/app/locale/zh_CN';
import { provideI18nConfig } from '~/app/services/i18n.service';
import { routes } from './app.routes';

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
    provideI18nConfig(zh_CN),
  ],
};
