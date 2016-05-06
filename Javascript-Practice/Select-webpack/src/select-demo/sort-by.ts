import {Pipe, PipeTransform, Input} from 'angular2/core';
import {Item} from './select';

function escapeRegexp(queryToEscape: string): string {
  return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}

@Pipe({
  name: 'movieFilter',
  pure: false
})
export class MovieFilterPipe implements PipeTransform {
  transform(arr: any , filters: string = ''): any {
    let arrs = arr;
    if (filters.length < 1) {
      return arrs;
    }
    if (filters && arr) {
    console.log("arr:", arr);
    console.log("filters:", filters);
      filters = filters.toLocaleLowerCase();
      return arr.map((item: any) => {
        if (item.children) {
          item.children = item.children.filter((child: any) => {
             return child && child.text.toLocaleLowerCase().includes(filters);
          });
          return item;
        }
        return arr;
        // return arr.reduce((memo: boolean, child: any) => {
        // return item.text && item.text.toLocaleLowerCase().includes(filter);            ;
        // }, false)
      });
    } else {

      return arr;
    }
  }
}
