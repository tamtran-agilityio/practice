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
// static properties
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
        // code...
    }
    Grid.prototype.calculatorGrid = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var gridOne = new Grid(1);
var girdTwo = new Grid(5);
console.log(gridOne.calculatorGrid({ x: 10, y: 10 }));
console.log(girdTwo.calculatorGrid({ x: 10, y: 10 }));
// advance techniquest
var Greeters = (function () {
    function Greeters(message) {
        this.greeting = message;
    }
    Greeters.prototype.greet = function () {
        return "Hello" + this.greeting;
    };
    return Greeters;
}());
var greeters;
greeters = new Greeters("Word");
console.log(greeter.greet());
var GreeterTeam = (function () {
    function GreeterTeam(message) {
        this.greeting = message;
    }
    GreeterTeam.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return GreeterTeam;
})();
var greetered;
greetered = new GreeterTeam("worlds");
console.log(greetered.greet());
var Greeted = (function () {
    function Greeted() {
    }
    Greeted.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeted.standardGreeting;
        }
    };
    Greeted.standardGreeting = "Hello there";
    return Greeted;
}());
var greeter1;
greeter1 = new Greeted();
console.log(greeter1.greet());
var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;
var LettersOnlyValidator = (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name_1 in validators) {
        console.log('"' + s + '" ' + (validators[name_1].isAcceptable(s) ? ' matches ' : ' does not match ') + name_1);
    }
});
// function
var myAdd = function (x, y) { return x + y; };
console.log(myAdd(1, 8));
var myAddNews = function (x, y) { return x + y; };
console.log(myAddNews(1, 6));
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
