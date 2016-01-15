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
console.log(/^.$/u.test(text));     // true


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
