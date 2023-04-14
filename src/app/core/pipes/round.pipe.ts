import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jxRound',
})
export class RoundPipe implements PipeTransform {
  transform(value: number, fractionDigits: number = 1): string {
    const newValue = Number(value).toFixed(fractionDigits);
    const decimals = newValue.split('.')[1];
    let isDecimalPartZero = true;
    for (let index = 0; index < decimals.length; index++) {
      const character = decimals[index];
      if (character !== '0') {
        isDecimalPartZero = false;
      }
    }
    return isDecimalPartZero ? newValue[0] : newValue;
  }
}
