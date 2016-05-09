import {Pipe, PipeTransform, Input} from 'angular2/core';
import {Item} from './select';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {
  transform(arr: any , filters: string = ''): any {
    let arss = JSON.parse(JSON.stringify(arr));

    if (filters.length < 1) {
      return arss;
    }

    if (filters && Array.isArray(arr)) {

      filters = filters.toLocaleLowerCase();
      return arss.filter((item: any) => {
        if (item.children) {
          item.children = item.children.filter((child: any) => {
            return child && child.text.toLocaleLowerCase().includes(filters);
          });
          return item;
        }
        return item;
      });
    } else {

      return arss;
    }
  }
}
