import { Component, OnInit, Pipe, PipeTransform } from 'angular2/core';

@Pipe({
	name: 'convertObjectToArray'
})

export class ConvertObjectToArrayPipe implements PipeTransform {
	transform(obj: any) {
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
		return arr;
	}
}