import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency',
})
export class MyCurrencyPipe implements PipeTransform {
  transform(value: any): any {
    return 'INR' + value;
  }
}
