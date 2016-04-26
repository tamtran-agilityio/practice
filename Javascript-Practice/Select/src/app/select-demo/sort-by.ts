import {Pipe, PipeTransform} from 'angular2/core';
@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
    let filter = args[0].toUpperCase();

    if (filter && Array.isArray(value)) {
      let filterKeys = Object.keys(filter);
      return value.filter(item =>
        filterKeys.reduce((memo, keyName) =>
        memo && item[keyName.toUpperCase()] === filter[keyName.toUpperCase()], true));
    } else {
      return value;
    }
  }
}
