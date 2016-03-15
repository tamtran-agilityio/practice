/**
 * Expose object-to-array
 * Convert object to an array of arrays of keys and values
 */

export function objectToArray (obj) {
	let arr = [];

	let keys = Object.keys(obj);

	keys.forEach(function (key) {
		let value = obj[key];

		let item = [key, value];

		arr.push(item);
	});

	return arr;
}
