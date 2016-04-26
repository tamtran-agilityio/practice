import {Pipe, PipeTransform} from 'angular2/core';
@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
    let filter = args[0].toLocaleLowerCase();
    if (filter && Array.isArray(value)) {
      let filterKeys = Object.keys(filter);
      return value.filter(item =>
      filterKeys.reduce((memo, keyName) =>
        memo && item[keyName].toLocaleLowerCase() === filter[keyName], true));
    } else {
      return value;
    }
  }
}
