import { Component, OnInit, Pipe, PipeTransform } from 'angular2/core';

@Pipe({
	name: 'convertObjectToArray'
})

export class ConvertObjectToArrayPipe implements PipeTransform {
	transform(obj: any, num: any) {
		console.log("AAAAAAAAAAAAAAAAAAAAA:", obj);
		if (!obj){
			return [];	
		}
		let arr = [], list = [];
		for (let key in obj) {
			console.debug(key, obj[key]);
			arr.push({
				key: key,
				object: obj[key]
			});
		}

		for (let i = 0; i < num; i ++) {
			list[i] = arr[Math.floor(Math.random()*arr.length)];
		}
		return list;
	}
}