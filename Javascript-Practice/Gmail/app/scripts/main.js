class point {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return '('+this.x + ' ' + this.y+')';
	}

	static create(x, y) {
		return new point(x, y);
	}
}

class colorPoint extends point {
	constructor(x, y, color) {
		super(x,y);
		this.color = color;
	}

	toString() {
		return super.toString() + 'color point ' + this.color;
	}
}

let cp = colorPoint.create(5,6);
// let cp = new colorPoint(25, 8, 'green');
console.log(cp.toString());

// generator
function *createIterator() {
		yield 1;
		yield 2;
		yield 3;
}

// generators are called like regular functions but return an iterator
let iterator = createIterator();

console.log(iterator.next().value);     // 1
console.log(iterator.next().value);     // 2
console.log(iterator.next().value);     // 3

// import * as math from "example";
// alert("2π = " + math.sum(math.pi, math.pi));
// otherApp.js
//
import {sum, pi} from "./math/map";
alert("2π = " + sum(pi, pi));
