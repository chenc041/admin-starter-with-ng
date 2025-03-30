import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class I18nServiceService {
  constructor() {}

  load(lang: string) {
    return new Promise((resolve, reject) => {
      const langScript = document.createElement('script');
      langScript.src = `./assets/i18n/${lang}.js`;
      langScript.onload = resolve;
      langScript.onerror = reject;
      document.body.appendChild(langScript);
    });
  }
}
