// Array method
_.chunk(['a', 'b', 'c', 'd'], 2);
_.chunk(['a', 'b', 'c', 'd'], 3);

_.compact([0, 1, false, 2, '', 3]);

_.difference([1, 2, 3], [4, 2]);

_.drop([1, 2, 3]);
_.drop([1, 2, 3], 2);
_.drop([1, 2, 3], 5);
_.drop([1, 2, 3], 0);

_.dropRight([1, 2, 3]);
_.dropRight([1, 2, 3], 2);
_.dropRight([1, 2, 3], 5);
_.dropRight([1, 2, 3], 0);

_.dropRightWhile([1, 2, 3], function(n) {
	return n > 1;
});

var users = [{
	'user': 'barney',
	'active': true
}, {
	'user': 'fred',
	'active': false
}, {
	'user': 'pebbles',
	'active': false
}];

// using the `_.matches` callback shorthand
_.pluck(_.dropRightWhile(users, {
	'user': 'pebbles',
	'active': false
}), 'user');
// → ['barney', 'fred']

// using the `_.matchesProperty` callback shorthand
_.pluck(_.dropRightWhile(users, 'active', false), 'user');
// → ['barney']

// using the `_.property` callback shorthand
_.pluck(_.dropRightWhile(users, 'active'), 'user');
// → ['barney', 'fred', 'pebbles']

_.dropWhile([1, 2, 3], function(n) {
	return n < 3;
});
// → [3]

var users = [{
	'user': 'barney',
	'active': false
}, {
	'user': 'fred',
	'active': false
}, {
	'user': 'pebbles',
	'active': true
}];

_.pluck(_.dropWhile(users, {
	'user': 'barney',
	'active': false
}), 'user');
// → ['fred', 'pebbles']

_.pluck(_.dropWhile(users, 'active', false), 'user');
// → ['pebbles']

_.pluck(_.dropWhile(users, 'active'), 'user');
// → ['barney', 'fred', 'pebbles']

var array = [1, 2, 3];

_.fill(array, 'a');
console.log(array);
// → ['a', 'a', 'a']

_.fill(Array(3), 2);
// → [2, 2, 2]

_.fill([4, 6, 8], '*', 1, 2);
// → [4, '*', 8]

_.first([1, 2, 3]); //1

_.indexOf([1, 2, 1, 2], 2);
// → 1

_.indexOf([1, 2, 1, 2], 2, 2);
// → 3

_.indexOf([1, 1, 2, 2], 2, true);
// → 2

_.last([1, 2, 3]);
// → 3
_.lastIndexOf([1, 2, 1, 2], 2);
// → 3

// using `fromIndex`
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// → 1

// performing a binary search
_.lastIndexOf([1, 1, 2, 2], 2, true);
// → 3

_.gt(3, 1);
// → true

_.gt(3, 3);
// → false

_.gt(1, 3);
// → false

_.isElement(document.body);
// → true

_.isElement('<body>');
// → false

_.isObject({});
// → true

_.isObject([1, 2, 3]);
// → true

_.isObject(1);
// → false

(function() {
  return _.toArray(arguments).slice(1);
}(1, 2, 3));
// --> [2,3]
