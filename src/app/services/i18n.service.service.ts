import { Injectable } from '@angular/core';
import { LANGUAGE_KEY } from '~/app/constants';

@Injectable({
  providedIn: 'root',
})
export class I18nServiceService {
  /**
   * 默认语言
   * @private
   */
  private DEFAULT_LANG = 'zh_CN';

  /**
   * 语言映射
   * @private
   */
  private langMap = new Map<string, string>();

  /**
   * 切换语言
   * @param lang
   */
  changLang(lang: string) {
    window.localStorage.setItem(LANGUAGE_KEY, lang);
  }

  /**
   * 获取当前语言
   */
  getLang() {
    return window.localStorage.getItem(LANGUAGE_KEY);
  }

  /**
   * 重置语言
   */
  resetLang() {
    window.localStorage.removeItem(LANGUAGE_KEY);
  }
}
