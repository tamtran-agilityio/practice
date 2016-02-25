/* global */

var count = 30;
function getCount(condition) {
  if(condition) {
    let count = 40;
    console.log(count);
    return count;
  } else {
    return null
  }
}

// execute get count
getCount(true);

function getLoop() {
  for (var i=0; i < 10; i++) {
    console.log([i]);
  }

  // i is still accessible here
  console.log("condition use var",i);
}

// execute get loop
getLoop();

function getLoopLet() {

  for (let i=0; i < 10; i++) {
    console.log([i]);
  }

  // i is not accessible here
  // console.log("condition use let", + i);
}

// execute get loop
getLoopLet();

// Functions in Loops
function loop() {

  var funcs = [];

  for (var i=0; i < 10; i++) {
    funcs.push(function() {
      console.log("function loop",i);
    });
  }

  funcs.forEach(function(func) {
    func();
  });
}

loop();

function loopAll() {

  var funcs = [];

  for (var i=0; i < 10; i++) {
    funcs.push((function(value) {
      return function() {
        console.log("function loop all item",value);
      }
    }(i)));
  }

  funcs.forEach(function(func) {
    func();
  });
}

loopAll();

// let function in loop
function letLoop() {
  var funcs = [];

  for (let i=0; i < 10; i++) {
    funcs.push(function() {
      console.log(i);
    });
  }

  funcs.forEach(function(func) {
    func();
  })

  var funcs = [],
    object = {
      a: true,
      b: true,
      c: true
    };

  for (let key in object) {
    funcs.push(function() {
      console.log(key);
    });
  }

  funcs.forEach(function(func) {
    func();
  });
}

letLoop();

var text = "𠮷";

console.log(text.length);           // 2
console.log(/^.$/.test(text));      // false
console.log(/^.$/u.test(text));


function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

console.log(codePointLength("abc"));    // 3
console.log(codePointLength("𠮷bc"));   // 3

//******** example function ******//
let value = 5;

function getValue() {
  return value++;
}

function add(first, second = getValue()) {
  return first + second;
}

console.log(add(1, 1));     // 2
console.log(add(1));        // 6
console.log(add(1));        // 7

function pick(object) {
    let result = Object.create(null);

    // start at the second parameter
    for (let i = 1, len = arguments.length; i < len; i++) {
        result[arguments[i]] = object[arguments[i]];
    }

    return result;
}

let book = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    year: 2015
};

let bookData = pick(book, "author", "year");

console.log(bookData.author);   // "Nicholas C. Zakas"
console.log(bookData.year);     // 2015

function doSomething() {
    // ...
}

var doAnotherThing = function() {
    // ...
};

console.log(doSomething.name);          // "doSomething"
console.log(doAnotherThing.name);       // "doAnotherThing"

var sum = (num1, num2) => num1 + num2;
console.log("arrow function a",sum = (2 , 5));
// effectively equivalent to:

var sum = function(num1, num2) {
    return num1 + num2;
};
console.log("arrow function",sum = (2 , 5));


let person = function(name) {

  return {
    getName: function() {
      return name;
    }
  };

}("Nicholas");

console.log(person.getName());

let values = [10, 20 , 30 ,40];
console.log(Math.max(...values), 50);

var PageHandler = {};

var PageHandler = {

  id: "123456",

  init: function() {
    document.addEventListener("click", (function(event) {
      this.doSomething(event.type);     // no error
    }).bind(this), false);
  },

  doSomething: function(type) {
    console.log("Handling " + type  + " for " + this.id);
  }
};

PageHandler.doSomething();

var PageHandler = {

  id: "123456",

  init: function() {
    document.addEventListener("click",
      event => this.doSomething(event.type), false);
  },

  doSomething: function(type) {
    console.log("Handling " + type  + " for " + this.id);
  }
};
PageHandler.doSomething();

// Arrow Functions and Arrays
var result = values.sort(function(a, b) {
  return a - b;
});
var result = values.sort((a, b) => a - b);

// object
// install object
function createPerson(name, age) {
  return {
    name,
    age
  };
}

// Concise Methods
var people = {
  name: "Nicholas",
  sayName() {
    console.log(this.name);
  }
};

// Computed Property Names
var lastName = "last name";

var people = {
  "first name": "Nicholas",
  [lastName]: "Zakas"
};

console.log(people["first name"]);
console.log(people[lastName]);

var suffix = " name";
var people = {
  ["first" + suffix]: "Nicholas",
  ["last" + suffix]: "Zakas"
};

console.log(people["first name"]);
console.log(people["last name"]);

// object.js()
console.log(+0 == -0);
console.log(+0 === -0);
console.log(Object.is(+0, -0));

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

console.log(5 == 5);
console.log(5 == "5");
console.log(5 === 5);
console.log(5 === "5");
console.log(Object.is(5, 5));
console.log(Object.is(5, "5"));

// Object.assign()
var receiver = {};

Object.assign(receiver,
  {
    type: "js",
    name: "file.js"
  },
  {
    type: "css",
    name: "main.css"
  }
);

console.log(receiver.type);
console.log(receiver.name);

// __proto__
let people1 = {
  getGreeting() {
    return "Hello";
  }
};

let dog = {
  getGreeting() {
    return "Woof";
  }
};

// prototype is people1
let friend = {
    __proto__: people1
};
console.log(friend.getGreeting());
console.log(Object.getPrototypeOf(friend) === people1);
console.log(friend.__proto__ === people1);

// set prototype to dog
friend.__proto__ = dog;
console.log(friend.getGreeting());
console.log(friend.__proto__ === dog);
console.log(Object.getPrototypeOf(friend) === dog);

// Super References
let person2 = {
    getGreeting() {
        return "Hello";
    }
};

let dog1 = {
    getGreeting() {
        return "Woof";
    }
};

// prototype is person2
let friend1 = {
    __proto__: person2,
    getGreeting() {
        // same as this.__proto__.getGreeting.call(this)
        return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
    }
};

console.log(friend.getGreeting());                      // "Hello, hi!"
console.log(Object.getPrototypeOf(friend1) === person2);  // true
console.log(friend.__proto__ === person2);               // true

// set prototype to dog
friend.__proto__ = dog1;
console.log(friend.getGreeting());                      // "Woof, hi!"
console.log(friend.__proto__ === dog);                  // true
console.log(Object.getPrototypeOf(friend1) === dog);     // true

let person4 = {
  getGreeting() {
    return "Hello";
  }
};

// prototype is person
let friend3 = {
  __proto__: person4,
  getGreeting() {
    // return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
  }
};

// prototype is friend
let relative = {
  __proto__: friend3
};

console.log(person4.getGreeting());
console.log(friend.getGreeting());
console.log(relative.getGreeting());



let person5 = {
    getGreeting() {
        return "Hello";
    }
};

// prototype is person5
let friend5 = {
    __proto__: person5,
    getGreeting() {
        return super.getGreeting() + ", hi!";
    }
};

// prototype is cat
let cat = {
  getGreeting() {
    return 'well';
  }
}

// prototype is cat
let catbig = {
  __proto__: cat,
  getGreeting() {
    return super.getGreeting() + "come";
  }
}

let catsmall = {
  __proto__: catbig
}

console.log("cat", cat.getGreeting());
console.log("cat big", catbig.getGreeting());
console.log("cat small", catsmall.getGreeting());

// method
let cup = {
  getCheck() {
    return "Cup";
  }
};

// prototype is cup
let cupGold = {
  __proto__: cup ,
  getCheck() {
    return super.getCheck() + "gold";
  }
};

// function getGlobalGreeting() {
//   return super.getCheck() + ", yo!";
// }

console.log(cup.getCheck());
console.log(cupGold.getCheck());
// assign getGreeting to the global function
// friend.getGreeting = getGlobalGreeting;
// friend.getGreeting();               // throws error

//Destructuring Assignment
function f ([ name, val ]) {
  console.log(name, val)
}
function g ({ name: n, val: v }) {
  console.log(n, v)
}
function h ({ name, val }) {
  console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })

// set
// let set = new Set();
// set.add(5);
// set.add(1);
// set.add("5");
// set.add(2);

// console.log("size item",set.size);

// let set = new Set([1, 2]);

// set.forEach(function(value, key, ownerSet) {
//   console.log(key + " " + value);
//   console.log(ownerSet === set);
// });

console.log([ 1, 3, 4, 2 ].find(x => x > 3))

let set = new Set([1, 2]),
  processor = {
    output(value) {
      console.log("value set ",value);
    },
    process(dataSet) {
      dataSet.forEach((value) => this.output(value));
    }
  };

processor.process(set);

// set map
function mapObjet() {
  // body...
  let map = Object.create(null);

  map.foo = "bar";

  // retrieving a value
  let value1 = map.foo;

  console.log("set map",value1);
}

mapObjet();

// convert to array
let test = new Set([1, 2, 3, 3, 3, 4, 5]),
  array = [...test];

console.log(array);

function eliminateDuplicates(items) {
  return [...new Set(items)];
}

let numbers = [1, 2, 3, 3, 3, 4, 5],
  noDuplicates = eliminateDuplicates(numbers);

console.log(noDuplicates);

//Number Safety Checking
let int = Number.isSafeInteger(42) === true
console.log(int);
Number.isSafeInteger(9007199254740992) === false

console.log(0.1 + 0.2 === 0.3)
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON) // true
console.log(Math.trunc(42.7))
console.log(Math.trunc( 0.1))
console.log(Math.trunc(-0.1))

// map
function mapTitle() {
  // body...
  let map = new Map();
  map.set("title", "Understanding ES6");
  map.set("year", 2016);

  console.log(map.get("title"));
  console.log(map.get("year"));
}
mapTitle();

function mapObjets() {
  // body...
  let map = new Map(),
    key1 = {},
    key2 = {};

  map.set(key1, 5);
  map.set(key2, 42);

  console.log(map.get(key1));
  console.log(map.get(key2));
}
mapObjets();

function mapMethods() {
  // body...
  let map = new Map();
  map.set("name", "Nicholas");
  map.set("age", 25);

  console.log("size map", map.size);

  console.log(map.has("name"));
  console.log(map.get("name"));

  console.log(map.has("age"));
  console.log(map.get("age"));

  map.delete("name");
  console.log(map.has("name"));
  console.log(map.get("name"));
  console.log(map.size);

  map.clear();
  console.log(map.has("name"));
  console.log(map.get("name"));
  console.log(map.has("age"));
  console.log(map.get("age"));
  console.log(map.size);
}
mapMethods();


//*** generals ***//
let Person = (function() {

  let privateData = new WeakMap();

  function Person(name) {
      privateData.set(this, { name: name });
  }

  Person.prototype.getName = function() {
      return privateData.get(this).name;
  };

  return Person;
}());

function createIterator(items) {

  var i = 0;
  return {
    next: function() {

      var done = (i >= items.length);
      var value = !done ? items[i++] : undefined;

      return {
        done: done,
        value: value
      };
    }
  };
}

var iterator = createIterator([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// generals
// "use strict";
// function *createIterator(items) {
//   for (let i=0; i < items.length; i++) {
//     yield items[i];
//   }
// }

// let iteratork = createIterator([1, 2, 3]);
// console.log(iteratork.next());
// console.log(iteratork.next());
// console.log(iteratork.next());
// console.log(iteratork.next());

// let createIterator = function *(items) {
//   for (let i=0; i < items.length; i++) {
//     yield items[i];
//   }
// };

// let iterators = createIterator([1, 2, 3]);

// console.log(iterator.next());

// var o = {

//   *createIterator(items) {
//     for (let i=0; i < items.length; i++) {
//       yield items[i];
//     }
//   }
// };

// let iteratores = o.createIterator([1, 2, 3]);
// console.log(iteratores.next());

let valuess = [1, 2, 3];
let iteratored = valuess[Symbol.iterator]();

console.log(iteratored.next());
console.log(iteratored.next());
console.log(iteratored.next());
console.log(iteratored.next());

function isIterable(object) {
  return typeof object[Symbol.iterator] === "function";
}

console.log(isIterable([1, 2, 3]));
console.log(isIterable("Hello"));
console.log(isIterable(new Map()));
console.log(isIterable(new Set()));
console.log(isIterable(new WeakMap()));
console.log(isIterable(new WeakSet()));

//**** Class ****//
// class declarations
class PersonClass {

  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

let persons = new PersonClass("Nicholas");
persons.sayName();

console.log(persons instanceof PersonClass);
console.log(persons instanceof Object);

console.log(typeof PersonClass);
console.log(typeof PersonClass.prototype.sayName);

// Accessor Properties
class CustomHTMLElement {

  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }

  setTag() {
    console.log(element);
  }
}

let descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype,
 "html");
console.log("get" in descriptor);
console.log("set" in descriptor);
console.log(descriptor.enumerable);


// Computed member names
let methodName = "sayNames";

class PersonName {

  constructor(name) {
    this.name = name;
  }

  [methodName]() {
    console.log(this.name);
  }
};

let me = new PersonName("Nicholas");
me.sayNames();

// class MyClass {

//   *createIterator() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }

// }

// let instance = new MyClass();
// let iteratorClass = instance.createIterator();

function createObject(classDef) {
  return new classDef();
}

let obj = createObject(class {
  sayHi() {
    console.log('Hi!');
  }
});

obj.sayHi();

// class MyClass {

//     *createIterator() {
//         yield 1;
//         yield 2;
//         yield 3;
//     }

// }

// let instance = new MyClass();
// let iteratorClass = instance.createIterator();

// Inheritance with Derived Classes
function recTangle(length, width) {
  this.length = length;
  this.width  = width;
}
recTangle.prototype.getArea = function() {
  return this.length * this.width;
};

function Square(length) {
  recTangle.call(this,length, length);
}

Square.prototype = Object.create(recTangle.prototype, {
  constructor: {
    value: Square,
    enumerable: true,
    writable: true,
    configuratable: true
  }
});

var square = new Square(9);
console.log(square.getArea());
console.log(square instanceof Square);
console.log(square instanceof recTangle);

class rectangleExtend {
  constructor(length, width) {
    this.length = length;
    this.width  = width;
  }
  getArea() {
    return this.length * this.width;
  }
}
class SquareExtend extends rectangleExtend {
  constructor(lenght) {
    super(lenght, lenght);
  }
}

var squareExtend = new SquareExtend(9);
console.log(squareExtend.getArea());
console.log(squareExtend instanceof SquareExtend);
console.log(squareExtend instanceof rectangleExtend);

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

// Derived Classes from Expressions

let SerializableMixin = {
  serialize() {
    return JSON.stringify(this);
  }
};

let AreaMixin = {
  getArea() {
    return this.length * this.width;
  }
};

function mixin(...mixins) {
  var base = function() {};
  Object.assign(base.prototype, ...mixins);
  return base;
}

class SquareMin extends mixin(AreaMixin, SerializableMixin) {
  constructor(length) {
    super();
    this.length = length;
    this.width = length;
  }
}

var x = new Square(3);
console.log(x.getArea());
// console.log(x.serialize());

function MyArray() {
  Array.apply(this, arguments);
}
let items = new MyArray(1, 2, 3, 4);
  // subitems = items.slice(1, 3);
console.log(items);

class MyClass {
  static get [Symbol.species]() {
    return this;
  }
  constructor(value) {
    this.value = value;
  }
  clone() {
    return new this.constructor[Symbol.species](this.value);
  }
}

class MyClass1 extends MyClass {

}

class MyClass2 extends MyClass {
  static get [Symbol.species]() {
    return MyClass;
  }
}

let instance1 = new MyClass1("foo"),
    clone1    = instance1.clone(),
    instance2 = new MyClass2("bar"),
    clone2    = instance2.clone();

console.log(clone1 instanceof MyClass);
console.log(clone1 instanceof MyClass1);
console.log(clone2 instanceof MyClass);
console.log(clone2 instanceof MyClass2);

/*
 * Array
 */
let itemsArray = Array.of(1, 2);
console.log(itemsArray.length);
console.log(itemsArray[0]);
console.log(itemsArray[1]);

// Array.from call
var args = Array.from(itemsArray);
console.log(args);

function translate() {
  return Array.from(arguments, (value) => value + 1);
}

let newNumbers = translate(1, 2, 3);

console.log(newNumbers);

// let numbersYield = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// };

// let numbers2 = Array.from(numbersYield, (value) => value + 1);

// console.log(numbers2);

// new function
let findNumbers = [25, 30, 35, 40, 45];

console.log(findNumbers.find(n => n > 33));
console.log(findNumbers.findIndex(n => n > 33));

// fill
let fillNumbers = [1,2,3,4];
fillNumbers.fill(0,1,2);
console.log(fillNumbers.toString());

// array buffer
let buffer = new ArrayBuffer(10);
console.log(buffer.byteLength);
let buffer2 = buffer.slice(4, 6);
console.log(buffer2.byteLength);

let view = new DataView(buffer);
view.setInt8(0, 5);
view.setInt8(1, -1);

console.log(view.getInt16(0));
console.log(view.getInt8(0));
console.log(view.getInt8(1));

let ints = new Int8Array(5);
console.log(ints.BYTES_PER_ELEMENT);
