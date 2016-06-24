import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value) {
    return value.slice().reverse();
  }
}