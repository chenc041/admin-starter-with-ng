import { inject, Pipe, PipeTransform } from '@angular/core';
import { I18nServiceService } from '~/app/services/i18n.service.service';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  private i18nService = inject(I18nServiceService);
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value, args, 'translate', this.i18nService);
    return value;
  }
}
