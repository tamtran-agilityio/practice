import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe implements PipeTransform {
  transform(array: Comment[], args: any): Comment[] {
    if (array == null ) return array;
    array.sort((a, b) => {
      if (a.commentId > b.commentId) {
        return -1;
      } else if (a.commentId < b.commentId) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}