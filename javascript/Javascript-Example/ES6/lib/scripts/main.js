"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Math, _people2, _obj, _obj2, _obj3;

var _marked = [createIterator].map(regeneratorRuntime.mark);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global */

var count = 30;
function getCount(condition) {
  if (condition) {
    var _count = 40;
    console.log(_count);
    return _count;
  } else {
    return null;
  }
}

// execute get count
getCount(true);

function getLoop() {
  for (var i = 0; i < 10; i++) {
    console.log([i]);
  }

  // i is still accessible here
  console.log("condition use var", i);
}

// execute get loop
getLoop();

function getLoopLet() {

  for (var i = 0; i < 10; i++) {
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

  for (var i = 0; i < 10; i++) {
    funcs.push(function () {
      console.log("function loop", i);
    });
  }

  funcs.forEach(function (func) {
    func();
  });
}

loop();

function loopAll() {

  var funcs = [];

  for (var i = 0; i < 10; i++) {
    funcs.push(function (value) {
      return function () {
        console.log("function loop all item", value);
      };
    }(i));
  }

  funcs.forEach(function (func) {
    func();
  });
}

loopAll();

// let function in loop
function letLoop() {
  var funcs = [];

  var _loop = function _loop(i) {
    funcs.push(function () {
      console.log(i);
    });
  };

  for (var i = 0; i < 10; i++) {
    _loop(i);
  }

  funcs.forEach(function (func) {
    func();
  });

  var funcs = [],
      object = {
    a: true,
    b: true,
    c: true
  };

  var _loop2 = function _loop2(key) {
    funcs.push(function () {
      console.log(key);
    });
  };

  for (var key in object) {
    _loop2(key);
  }

  funcs.forEach(function (func) {
    func();
  });
}

letLoop();

var text = "𠮷";

console.log(text.length); // 2
console.log(/^.$/.test(text)); // false
console.log(/^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(text));

function codePointLength(text) {
  var result = text.match(/(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g);
  return result ? result.length : 0;
}

console.log(codePointLength("abc")); // 3
console.log(codePointLength("𠮷bc")); // 3

//******** example function ******//
var value = 5;

function getValue() {
  return value++;
}

function add(first) {
  var second = arguments.length <= 1 || arguments[1] === undefined ? getValue() : arguments[1];

  return first + second;
}

console.log(add(1, 1)); // 2
console.log(add(1)); // 6
console.log(add(1)); // 7

function pick(object) {
  var result = Object.create(null);

  // start at the second parameter
  for (var i = 1, len = arguments.length; i < len; i++) {
    result[arguments[i]] = object[arguments[i]];
  }

  return result;
}

var book = {
  title: "Understanding ECMAScript 6",
  author: "Nicholas C. Zakas",
  year: 2015
};

var bookData = pick(book, "author", "year");

console.log(bookData.author); // "Nicholas C. Zakas"
console.log(bookData.year); // 2015

function doSomething() {
  // ...
}

var doAnotherThing = function doAnotherThing() {
  // ...
};

console.log(doSomething.name); // "doSomething"
console.log(doAnotherThing.name); // "doAnotherThing"

var sum = function sum(num1, num2) {
  return num1 + num2;
};
console.log("arrow function a", sum = (2, 5));
// effectively equivalent to:

var sum = function sum(num1, num2) {
  return num1 + num2;
};
console.log("arrow function", sum = (2, 5));

var person = function (name) {

  return {
    getName: function getName() {
      return name;
    }
  };
}("Nicholas");

console.log(person.getName());

var values = [10, 20, 30, 40];
console.log((_Math = Math).max.apply(_Math, values), 50);

var PageHandler = {};

var PageHandler = {

  id: "123456",

  init: function init() {
    document.addEventListener("click", function (event) {
      this.doSomething(event.type); // no error
    }.bind(this), false);
  },

  doSomething: function doSomething(type) {
    console.log("Handling " + type + " for " + this.id);
  }
};

PageHandler.doSomething();

var PageHandler = {

  id: "123456",

  init: function init() {
    var _this = this;

    document.addEventListener("click", function (event) {
      return _this.doSomething(event.type);
    }, false);
  },

  doSomething: function doSomething(type) {
    console.log("Handling " + type + " for " + this.id);
  }
};
PageHandler.doSomething();

// Arrow Functions and Arrays
var result = values.sort(function (a, b) {
  return a - b;
});
var result = values.sort(function (a, b) {
  return a - b;
});

// object
// install object
function createPerson(name, age) {
  return {
    name: name,
    age: age
  };
}

// Concise Methods
var people = {
  name: "Nicholas",
  sayName: function sayName() {
    console.log(this.name);
  }
};

// Computed Property Names
var lastName = "last name";

var people = _defineProperty({
  "first name": "Nicholas"
}, lastName, "Zakas");

console.log(people["first name"]);
console.log(people[lastName]);

var suffix = " name";
var people = (_people2 = {}, _defineProperty(_people2, "first" + suffix, "Nicholas"), _defineProperty(_people2, "last" + suffix, "Zakas"), _people2);

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

Object.assign(receiver, {
  type: "js",
  name: "file.js"
}, {
  type: "css",
  name: "main.css"
});

console.log(receiver.type);
console.log(receiver.name);

// __proto__
var people1 = {
  getGreeting: function getGreeting() {
    return "Hello";
  }
};

var dog = {
  getGreeting: function getGreeting() {
    return "Woof";
  }
};

// prototype is people1
var friend = {
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
var person2 = {
  getGreeting: function getGreeting() {
    return "Hello";
  }
};

var dog1 = {
  getGreeting: function getGreeting() {
    return "Woof";
  }
};

// prototype is person2
var friend1 = {
  __proto__: person2,
  getGreeting: function getGreeting() {
    // same as this.__proto__.getGreeting.call(this)
    return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
  }
};

console.log(friend.getGreeting()); // "Hello, hi!"
console.log(Object.getPrototypeOf(friend1) === person2); // true
console.log(friend.__proto__ === person2); // true

// set prototype to dog
friend.__proto__ = dog1;
console.log(friend.getGreeting()); // "Woof, hi!"
console.log(friend.__proto__ === dog); // true
console.log(Object.getPrototypeOf(friend1) === dog); // true

var person4 = {
  getGreeting: function getGreeting() {
    return "Hello";
  }
};

// prototype is person
var friend3 = {
  __proto__: person4,
  getGreeting: function getGreeting() {
    // return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
  }
};

// prototype is friend
var relative = {
  __proto__: friend3
};

console.log(person4.getGreeting());
console.log(friend.getGreeting());
console.log(relative.getGreeting());

var person5 = {
  getGreeting: function getGreeting() {
    return "Hello";
  }
};

// prototype is person5
var friend5 = _obj = {
  __proto__: person5,
  getGreeting: function getGreeting() {
    return _get(Object.getPrototypeOf(_obj), "getGreeting", this).call(this) + ", hi!";
  }
};

// prototype is cat
var cat = {
  getGreeting: function getGreeting() {
    return 'well';
  }
};

// prototype is cat
var catbig = _obj2 = {
  __proto__: cat,
  getGreeting: function getGreeting() {
    return _get(Object.getPrototypeOf(_obj2), "getGreeting", this).call(this) + "come";
  }
};

var catsmall = {
  __proto__: catbig
};

console.log("cat", cat.getGreeting());
console.log("cat big", catbig.getGreeting());
console.log("cat small", catsmall.getGreeting());

// method
var cup = {
  getCheck: function getCheck() {
    return "Cup";
  }
};

// prototype is cup
var cupGold = _obj3 = {
  __proto__: cup,
  getCheck: function getCheck() {
    return _get(Object.getPrototypeOf(_obj3), "getCheck", this).call(this) + "gold";
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
function f(_ref) {
  var _ref2 = _slicedToArray(_ref, 2);

  var name = _ref2[0];
  var val = _ref2[1];

  console.log(name, val);
}
function g(_ref3) {
  var n = _ref3.name;
  var v = _ref3.val;

  console.log(n, v);
}
function h(_ref4) {
  var name = _ref4.name;
  var val = _ref4.val;

  console.log(name, val);
}
f(["bar", 42]);
g({ name: "foo", val: 7 });
h({ name: "bar", val: 42 });

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

console.log([1, 3, 4, 2].find(function (x) {
  return x > 3;
}));

var set = new Set([1, 2]),
    processor = {
  output: function output(value) {
    console.log("value set ", value);
  },
  process: function process(dataSet) {
    var _this2 = this;

    dataSet.forEach(function (value) {
      return _this2.output(value);
    });
  }
};

processor.process(set);

// set map
function mapObjet() {
  // body...
  var map = Object.create(null);

  map.foo = "bar";

  // retrieving a value
  var value1 = map.foo;

  console.log("set map", value1);
}

mapObjet();

// convert to array
var test = new Set([1, 2, 3, 3, 3, 4, 5]),
    array = [].concat(_toConsumableArray(test));

console.log(array);

function eliminateDuplicates(items) {
  return [].concat(_toConsumableArray(new Set(items)));
}

var numbers = [1, 2, 3, 3, 3, 4, 5],
    noDuplicates = eliminateDuplicates(numbers);

console.log(noDuplicates);

//Number Safety Checking
var int = Number.isSafeInteger(42) === true;
console.log(int);
Number.isSafeInteger(9007199254740992) === false;

console.log(0.1 + 0.2 === 0.3);
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
console.log(Math.trunc(42.7));
console.log(Math.trunc(0.1));
console.log(Math.trunc(-0.1));

// map
function mapTitle() {
  // body...
  var map = new Map();
  map.set("title", "Understanding ES6");
  map.set("year", 2016);

  console.log(map.get("title"));
  console.log(map.get("year"));
}
mapTitle();

function mapObjets() {
  // body...
  var map = new Map(),
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
  var map = new Map();
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

var Person = function () {

  var privateData = new WeakMap();

  function Person(name) {
    privateData.set(this, { name: name });
  }

  Person.prototype.getName = function () {
    return privateData.get(this).name;
  };

  return Person;
}();

function createIterator(items) {

  var i = 0;
  return {
    next: function next() {

      var done = i >= items.length;
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
"use strict";
function createIterator(items) {
  var i;
  return regeneratorRuntime.wrap(function createIterator$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        i = 0;

      case 1:
        if (!(i < items.length)) {
          _context.next = 7;
          break;
        }

        _context.next = 4;
        return items[i];

      case 4:
        i++;
        _context.next = 1;
        break;

      case 7:
      case "end":
        return _context.stop();
    }
  }, _marked[0], this);
}

var iteratork = createIterator([1, 2, 3]);
console.log(iteratork.next());
console.log(iteratork.next());
console.log(iteratork.next());
console.log(iteratork.next());

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

var valuess = [1, 2, 3];
var iteratored = valuess[Symbol.iterator]();

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