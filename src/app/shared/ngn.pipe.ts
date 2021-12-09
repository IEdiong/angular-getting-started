import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NGN',
})
export class Ngn implements PipeTransform {
  transform(value: number) {
    return `N${value}`;
  }
}
