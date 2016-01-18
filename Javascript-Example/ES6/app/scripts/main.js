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
