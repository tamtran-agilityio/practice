let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
let list:any[] = [1, true, "free"];

list[1] = 100;
console.log(list[1]);

// void
function warnUser(): void {
	alert("This is my warning message");
}

// interface
function printLabel(labelledObj: {label: string}) {
	console.log(labelledObj.label);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface LabelledValue {
	label: string;
}

function printLabels(labelledObj: LabelledValue) {
	console.log(labelledObj.label);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabels(myObj);

interface SquareConfig {
	color?: string;
	width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
	let newSquare = {color: "white", area: 100};
	if (config.color) {
		newSquare.color = config.color;
	}
	if (config.width) {
		newSquare.area = config.width * config.width;
	}
	console.log(newSquare);
	return newSquare;
}

let mySquare = createSquare({color: "black"});

interface SearchFunc {
	(source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
	let result = source.search(subString);
	if (result == -1) {
		return false;
	}
	else {
		return true;
	}
}
let getSearch = mySearch('13', '1');
console.log(getSearch);
// array types
interface StringArray {
	[index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
console.log(myArray);


// class types
interface ClockInterface {
	currentTime: Date;
	setTime(d: Date);
}

class Clock implements ClockInterface  {
	currentTime: Date;
	setTime(d: Date) {
		this.currentTime = d;
	}
	constructor(h: number, m: number) {
	}
}

interface ClockStatic {
	new (hour: number, minute: number);
}

class Clocks  {
	currentTime: Date;
	constructor(h: number, m: number) {
	}
}

let cs: ClockStatic = Clocks;
let newClock = new cs(7, 30);

// extends interface
interface Shape {
	color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
	sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

console.log(square);

// class
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet());

class Aminal {
	name: string;
	constructor(theName: string) {
		this.name = theName;
	}
	move(meters: number = 0) {
		console.log(this.name + " moved " + meters + "m.");
	}
}

class Snake extends Aminal {
	constructor(name: string) {
		super(name);
	}
	move(meters = 5) {
		console.log("Slithering...");
		super.move(meters);
	}
}

class Horse extends Aminal {
	constructor(name: string) {
		super(name);
	}
	move(meters = 45) {
		console.log("Galloping...");
		super.move(meters);
	}
}
let sam = new Snake("Sammy the Python");
sam.move();
let tom: Aminal = new Horse("Tommy the Palomino");
tom.move();

class Animal {
	private name:string;
	constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
	constructor() { super("Rhino"); }
}

class Employee {
	private name:string;
	constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// animal = employee;

let passcode = "password";
class People {
	private _fullName: string;
	get fullName(): string {
		return this._fullName;
	}
	set fullName(newName: string) {
		if (passcode && passcode === 'password') {
			this._fullName = newName;
		} else {
			console.log("Error: Unauthorized update of employee!");
		}
	}
}

let people = new People();
people.fullName ='SameOne';
if (people.fullName) {
	console.log(people.fullName);
}

// static properties
class  Grid {
	static origin = {x: 0, y: 0};
	calculatorGrid(point: {x: number; y: number; }) {
		let xDist = (point.x - Grid.origin.x);
		let yDist = (point.y - Grid.origin.y);
		return Math.sqrt(xDist*xDist + yDist*yDist) / this.scale;
	}
	constructor(public scale: number) {
		// code...
	}
}
let gridOne = new Grid(1);
let girdTwo = new Grid(5);
console.log(gridOne.calculatorGrid({x: 10, y: 10}));
console.log(girdTwo.calculatorGrid({x: 10, y: 10}));

// advance techniquest
class Greeters {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello" + this.greeting;
	}
}

let greeters: Greeters;
greeters = new Greeters("Word");
console.log(greeter.greet());

let GreeterTeam = (function () {
	function GreeterTeam(message) {
		this.greeting = message;
	}
	GreeterTeam.prototype.greet = function () {
		return "Hello, " + this.greeting;
	};
	return GreeterTeam;
})();

let greetered;
greetered = new GreeterTeam("worlds");
console.log(greetered.greet());

class Greeted {
	static standardGreeting = "Hello there";
	greeting: string;
	greet() {
		if (this.greeting) {
			return  "Hello, " + this.greeting;
		} else {
			return Greeted.standardGreeting;
		}
	}
}

var greeter1: Greeted;
greeter1 = new Greeted();
console.log(greeter1.greet());

interface StringValidator {
	isAcceptable(s: string): boolean;
}

var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
	isAcceptable(s: string) {
  	return lettersRegexp.test(s);
	}
}

class ZipCodeValidator implements StringValidator {
	isAcceptable(s: string) {
  	return s.length === 5 && numberRegexp.test(s);
	}
}

// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators: { [s: string]: StringValidator; } = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
	for (let name in validators) {
		console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
	}
});


// function
let myAdd: (x:number, y:number)=>number =
	function(x: number, y: number): number { return x+y; };
console.log(myAdd(1,8));

let myAddNews = function(x: number, y: number): number { return x+y; };
console.log(myAddNews(1,6));

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
	// Check to see if we're working with an object/array
	// if so, they gave us the deck and we'll pick the card
	if (typeof x === "object") {
		let pickedCard = Math.floor(Math.random() * x.length);
		return pickedCard;
	}
	// Otherwise just let them pick the card
	else if (typeof x === "number") {
		let pickedSuit = Math.floor(x / 13);
		return { suit: suits[pickedSuit], card: x % 13 };
	}
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
