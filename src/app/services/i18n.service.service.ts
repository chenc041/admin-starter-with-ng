import { inject, Injectable, InjectionToken, makeEnvironmentProviders } from '@angular/core';

export const I18N_TOKEN = new InjectionToken<Record<string, any>>('I18N_LANG');

@Injectable({
  providedIn: 'root',
})
export class I18nServiceService {
  private readonly langMap = new Map<string, string>();
  private localeSource = inject(I18N_TOKEN);
  constructor() {
    this.langMap = new Map(Object.entries(this.localeSource));
  }

  translate(key: string) {
    const isExist = this.langMap.has(key);
    if (!isExist) {
      console.warn(`${key} 缺少对应的国际化翻译`);
    }
    return this.langMap.get(key) ?? key;
  }
}

/**
 * 注册国际化配置
 * @param locale
 */
export const provideI18nConfig = (locale: Record<string, any>) => {
  return makeEnvironmentProviders([
    {
      provide: I18N_TOKEN,
      useValue: locale,
    },
  ]);
};
