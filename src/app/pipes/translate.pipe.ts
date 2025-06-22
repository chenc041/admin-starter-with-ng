import { inject, Pipe, type PipeTransform } from '@angular/core';
import { I18nService } from '~/app/services/i18n.service';

@Pipe({
	name: 'translate',
})
export class TranslatePipe implements PipeTransform {
	private i18nService = inject(I18nService);

	transform(value: unknown): unknown {
		return this.i18nService.translate(value as string);
	}
}
