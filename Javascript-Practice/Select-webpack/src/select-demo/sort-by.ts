import {Pipe, PipeTransform} from 'angular2/core';

function escapeRegexp(queryToEscape: string): string {
  return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}

@Pipe({
  name: 'movieFilter',
  pure: false
})
export class MovieFilterPipe implements PipeTransform {

  transform(arr: any, filter: string): any {
    console.log("filter", filter)
    if (filter && arr) {
    console.log("arr:", arr);
    console.log("filter:", filter);
      filter = filter.toLocaleLowerCase();
      let arrRs = arr.map((item: any) => {
        if (item.children){
          item.children = item.children.filter((child: any) => {
             return child && child.text.toLocaleLowerCase().includes(filter);
          });
          return item;
        }
        return item;
        // return arr.reduce((memo: boolean, child: any) => {
        // return item.text && item.text.toLocaleLowerCase().includes(filter);            ;
        // }, false)
      });
      console.log("arrRs:", arrRs);
      console.log("arr2:", arr);
      return arrRs;
    } else {

      return arr;
    }
  }
}
