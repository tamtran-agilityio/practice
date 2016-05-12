import { Component, OnInit, Pipe, PipeTransform } from 'angular2/core';

@Pipe({
  name: 'convertObjectToArray'
})

export class ConvertObjectToArrayPipe implements PipeTransform {
  transform(obj: any) {
    console.log("SDDD", obj);
    if (!obj) {
      return [];
    }
    let arr: Array<any> = [];
    for (let key in obj) {
      arr.push({
        key: key,
        object: obj[key]
      });
    }
    return arr;
  }
}
