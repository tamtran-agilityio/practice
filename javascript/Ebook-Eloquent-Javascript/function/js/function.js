/* 	Author: Tran Tam
	Email: tam.tran@asnet.com.vn
	Address: 604, Nui Thanh, Da Nang
*/
// print an array
function printArray(array) {
	for (var i = 0; i < array.length; i++) {
		print(array[i]);
	}
}

function forEach(array, action) {
	for (var i = 0; i < array.length; i++) {
		action(array[i]);
	}
}

function sum(numbers) {
	var total = 0;
	forEach(numbers, function (number) {
		total += number;
	});
	return total;
}

function negate(func) {
	return function() {
	return !func.apply(null, arguments);
	};
}

function reduce(combine, base, array) {
	forEach(array, function (element) {
		base = combine(base, element);
	});
	return base;
}

function add(a, b) {
	return a + b;
}

function sum(numbers) {
	return reduce(add, 0, numbers);
}

function countZeroes(array) {
	function counter(total, element) {
		return total + (element === 0 ? 1 : 0);
	}
	return reduce(counter, 0, array);
}