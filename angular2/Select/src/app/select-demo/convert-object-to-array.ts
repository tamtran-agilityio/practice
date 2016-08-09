import { Component, Pipe, PipeTransform } from 'angular2/core';

@Pipe({
  name: 'convertObjectToArray'
})

export class ConvertObjectToArrayPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
      console.debug("args", args);
      console.debug("value", value);
    //       if (args.length < 1) {
    //   return [];
    // }
    // let arr = [], list = [];
    // for (let key in value) {
    //   arr.push({
    //     key: key,
    //     object: value[key]
    //   });
    // }
    // console.log("arr", arr);
    // return arr;
  }
}
