import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
	transform(value:number, [exponent]) : number {
		var exp = parseFloat(exponent);
		return Math.pow(value, isNaN(exp) ? 1 : exp);
	}
}