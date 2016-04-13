import { Component, OnInit, Pipe, PipeTransform } from 'angular2/core';

@Pipe({
  name: 'randDomArray'
})

export class RandDomArray implements PipeTransform {
  transform(obj: any, num: any) {
    if (!obj){
      return [];
    }
    let arr = [], list = [];
    for (let key in obj) {
      arr.push({
        key: key,
        object: obj[key]
      });
    }

    for (let i = 0; i < num; i ++) {
      let item = Math.floor(Math.random()*arr.length)
      list[i] = arr[item];
      arr.splice(item , 1);
    }
    return list;
  }
}
