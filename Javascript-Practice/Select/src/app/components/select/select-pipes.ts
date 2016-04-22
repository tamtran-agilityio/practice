import {Pipe} from 'angular2/core';
import {escapeRegexp} from './common';

@Pipe({
  name: 'hightLight'
})

export class HightLightPipe {
  constructor() {}
  transform(value:string, args:any[]) {

    if (args.length < 1) {
      return value;
    }

    let querySelect = args[0];

    if ( querySelect ) {

      let tagItem = new RegExp('<[^<>]>', 'ig');

      let tagList = value.match(tagItem);

      let tmpValue = value.replace(tagItem, '$!$');

      value = tmpValue.replace(new RegExp(escapeRegexp(querySelect), ' gi'), '<strong>$&</strong>')

      for (let i = 0; value.indexOf('$!$') > -1; i++) {
      value = value.replace('$!$', tagList[i]);
      }
    }
    return value;
  }
}

export function stripTags( input: string ) {
  let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
