import { Pipe, PipeTransform } from '@angular/core';
import { round } from '@popperjs/core/lib/utils/math';

@Pipe({
  name: 'jxRound',
})
export class RoundPipe implements PipeTransform {
  transform(value: number, fractionDigits : number = 1): string {
    return Number(value).toFixed(fractionDigits);
  }
}
