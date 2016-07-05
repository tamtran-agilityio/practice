import {Pipe, PipeTransform} from 'angular2/core';
@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {
  transform(arr: any, [filter]: string[]): any {
    if (filter && Array.isArray(arr)) {
      filter = filter.toLocaleLowerCase();
      let filterKeys = Object.keys(filter);
      return arr.filter(item =>
      filterKeys.reduce((memo, keyName) => {
        return memo && item.text[keyName].toLocaleLowerCase() === filter[keyName];
      }, true));
    } else {
      return arr;
    }
  }
}
