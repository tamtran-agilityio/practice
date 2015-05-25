// Layer 1 : Single object
//object literals
var jane = {
	name: 'Jane',

	describe: function() {
		return 'Person named ' + this.name; // (1)
	}, // (2)
};

//Dot Operator (.)
var jane = {
	name: 'Jane',
	describe: function() {
		return 'Person named ' + this.name;
	}
};
//call method get name
jane.name //result Jane
	//call method get describe
jane.describe //result [Function]

jane.unknownProperty //undefined

jane.name = 'John'; // set property `name`
jane.describe() //'Person named John'

//deleting properties
var obj = {
	hello: 'world'
};
delete obj.hello //result true
obj.hello // call obj result undefined

//
var obj = {
	foo: 'a',
	bar: 'b'
};

obj.foo = undefined;
Object.keys(obj) // result [ 'foo', 'bar' ]
	// delete obj foo
delete obj.foo //result true
	//call obj
Object.keys(obj) //result  [ 'bar' ]

//var obj = {};
Object.defineProperty(obj, 'canBeDeleted', {
	value: 123,
	configurable: true
});
Object.defineProperty(obj, 'cannotBeDeleted', {
	value: 456,
	configurable: false
});

delete obj.cannotBeDeleted //false
delete obj.doesNotExist //true
delete obj.canBeDeleted //true
delete obj.doesNotExist //true
delete obj.canBeDeleted //true
	//Unusual Property Keys
var obj = {
	var: 'a',
	function: 'b'
};
obj.var //'a'
obj.function //'b'

// keys are numbers
var obj = {
	0.7: 'abc'
};
Object.keys(obj) //[ '0.7' ] 
obj['0.7'] //'abc'

var obj = {
	'not an identifier': 123
};
Object.keys(obj) // [ 'not an identifier' ] 
obj['not an identifier'] //123

//Bracket Operator ([])
var obj = {
	someProperty: 'abc'
};

obj['some' + 'Property'] //'abc'

var propKey = 'someProperty';
obj[propKey] //'abc'

var obj = {
	'not an identifier': 123
};
obj['not an identifier'] //123

var obj = {
	'6': 'bar'
};
obj[3 + 3] // key: the string '6' result 'bar'

//Calling methods via the bracket operator
var obj = {};
obj['anotherProperty'] = 'def';
obj.anotherProperty //result 'def'

// Deleting properties via the bracket operator
var obj = {
	'not an identifier': 1,
	prop: 2
};
Object.keys(obj)['not an identifier', 'prop']
delete obj['not an identifier'] //true
Object.keys(obj) // [ 'prop' ]

// Deleting properties via the bracket operator
var obj = {
	'not an identifier': 1,
	prop: 2
};
Object.keys(obj)['not an identifier', 'prop']
delete obj['not an identifier'] //true
Object.keys(obj) // result ['prop']

// Calling Functions While Setting this: call(), apply(), and bind()
var jane = {
	name: 'Jane',
	sayHelloTo: function(otherName) {
		'use strict';
		console.log(this.name + ' says hello to ' + otherName);
	}
};
jane.sayHelloTo('Tarzan');

jane.sayHelloTo.call(jane, 'Tarzan');

var func = jane.sayHelloTo;
func.call(jane, 'Tarzan');
// apply() for Constructors
Math.max(...[13, 7, 30]) // error
Math.max(13, 7, 30) // result 30
new(Date.bind(null, 2011, 11, 24))

var counter = {
	count: 0,
	inc: function() {
		this.count++;
	}
}
var func = counter.inc;
func()
counter.count // didn’t work 0
count // global varible NaN

counter.inc = function() {
	'use strict';
	this.count++
}; >
var func2 = counter.inc; > func2()
	//TypeError: Cannot read property 'count' of undefined

// Pitfall: Functions Inside Methods Shadow this
var obj = {
	name: 'Jane',
	friends: ['Tarzan', 'Cheeta'],
	loop: function() {
		'use strict';
		this.friends.forEach(
			function(friend) { // (1)
				console.log(this.name + ' knows ' + friend); // (2)
			}
		);
	}
};
//call obj
obj.loop();
// TypeError: Cannot read property 'name' of undefined

//that = this
loop: function() {
	'use strict';
	var that = this;
	this.friends.forEach(function(friend) {
		console.log(that.name + ' knows ' + friend);
	});
}

obj.loop();
// Jane knows Tarzan, Jane knows Cheeta

// binl()
loop: function() {
	'use strict';
	this.friends.forEach(function(friend) {
		console.log(this.name + ' knows ' + friend);
	}.bind(this)); // (1)
}

// thisValue for forEach()
loop: function() {
	'use strict';
	this.friends.forEach(function(friend) {
		console.log(this.name + ' knows ' + friend);
	}, this);
}

// property
var PersonProto = {
	describe: function() {
		return 'Person named ' + this.name;
	}
};
var jane = {
	[
		[Prototype]
	]: PersonProto,
	name: 'Jane'
};
var tarzan = {
	[
		[Prototype]
	]: PersonProto,
	name: 'Tarzan'
};

jane.describe()
//Person named Jane
tarzan.describe()
//Person named Tarzan

Object literals (see Object Literals):
var jane = {
    name: 'Jane',

    'not an identifier': 123,

    describe: function () { // method
        return 'Person named '+this.name;
    },
};
// Call a method:
console.log(jane.describe()); // Person named Jane

// Dot operator (.) (see Dot Operator (.): Accessing Properties via Fixed Keys):
obj.propKey
obj.propKey = value
delete obj.propKey

// Bracket operator ([]) (see Bracket Operator ([]): Accessing Properties via Computed Keys):
obj['propKey']
obj['propKey'] = value
delete obj['propKey']

//Getting and setting the prototype (see Getting and Setting the Prototype):
Object.create(proto, propDescObj?)
Object.getPrototypeOf(obj)

// Iteration and detection of properties (see Iteration and Detection of Properties):
Object.keys(obj)
Object.getOwnPropertyNames(obj)

Object.prototype.hasOwnProperty.call(obj, propKey)
propKey in obj

// Getting and defining properties via descriptors (see Getting and Defining Properties via Descriptors):
Object.defineProperty(obj, propKey, propDesc)
Object.defineProperties(obj, propDescObj)
Object.getOwnPropertyDescriptor(obj, propKey)
Object.create(proto, propDescObj?)

// Protecting objects (see Protecting Objects):
Object.preventExtensions(obj)
Object.isExtensible(obj)

Object.seal(obj)
Object.isSealed(obj)

Object.freeze(obj)
Object.isFrozen(obj)

// Methods of all objects (see Methods of All Objects):
Object.prototype.toString()
Object.prototype.valueOf()

Object.prototype.toLocaleString()

Object.prototype.isPrototypeOf(obj)
Object.prototype.hasOwnProperty(key)
Object.prototype.propertyIsEnumerable(propKey)