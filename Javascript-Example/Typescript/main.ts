var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
var list:any[] = [1, true, "free"];

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
	var newSquare = {color: "white", area: 100};
	if (config.color) {
		newSquare.color = config.color;
	}
	if (config.width) {
		newSquare.area = config.width * config.width;
	}
	console.log(newSquare);
	return newSquare;
}

var mySquare = createSquare({color: "black"});

interface SearchFunc {
	(source: string, subString: string): boolean;
}
var mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
	var result = source.search(subString);
	if (result == -1) {
		return false;
	}
	else {
		return true;
	}
}
var getSearch = mySearch('13', '1');
console.log(getSearch);
// array types
interface StringArray {
	[index: number]: string;
}

var myArray: StringArray;
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

var cs: ClockStatic = Clocks;
var newClock = new cs(7, 30);

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

var square = <Square>{};
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

var greeter = new Greeter("world");
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
var sam = new Snake("Sammy the Python");
sam.move();
var tom: Aminal = new Horse("Tommy the Palomino");
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

var animal = new Animal("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");

animal = rhino;
// animal = employee;

var passcode = "password";
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

var people = new People();
people.fullName ='SameOne';
if (people.fullName) {
	console.log(people.fullName);
}
