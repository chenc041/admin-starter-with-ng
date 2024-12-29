import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value, args, 'translate');
    return value;
  }
}
