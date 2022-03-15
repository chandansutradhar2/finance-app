import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saluation',
})
export class SalPipePipe implements PipeTransform {
  transform(value: any, args?: any): string {
    return 'Mr' + value;
  }
}
