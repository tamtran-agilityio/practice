var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var list = [1, true, "free"];
list[1] = 100;
console.log(list[1]);
// void
function warnUser() {
    alert("This is my warning message");
}
// interface
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabels(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabels(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    console.log(newSquare);
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var getSearch = mySearch('13', '1');
console.log(getSearch);
var myArray;
myArray = ["Bob", "Fred"];
console.log(myArray);
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var Clocks = (function () {
    function Clocks(h, m) {
    }
    return Clocks;
}());
var cs = Clocks;
var newClock = new cs(7, 30);
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.log(square);
// class
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greet());
var Aminal = (function () {
    function Aminal(theName) {
        this.name = theName;
    }
    Aminal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + " moved " + meters + "m.");
    };
    return Aminal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, meters);
    };
    return Snake;
}(Aminal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
}(Aminal));
var sam = new Snake("Sammy the Python");
sam.move();
var tom = new Horse("Tommy the Palomino");
tom.move();
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        _super.call(this, "Rhino");
    }
    return Rhino;
}(Animal));
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
// animal = employee;
var passcode = "password";
var People = (function () {
    function People() {
    }
    Object.defineProperty(People.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode === 'password') {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return People;
}());
var people = new People();
people.fullName = 'SameOne';
if (people.fullName) {
    console.log(people.fullName);
}
