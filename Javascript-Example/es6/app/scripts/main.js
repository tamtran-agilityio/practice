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
