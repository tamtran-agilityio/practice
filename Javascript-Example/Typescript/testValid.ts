
interface Validator {
	isAcceptable(): boolean;
}

class LettersOnlyValidator implements Validator {
	value: string;
	constructor(value: string) {
		this.value = value;
	}
	isAcceptable() {
		let lettersRegexp = /^[A-Za-z]+$/;
		return lettersRegexp.test(this.value);
	}
}

class LettersMinValidator implements Validator {
	value: any;
	constructor(value: any) {
		this.value = value;
	}
	isAcceptable() {
		let numberRegexp = /^[6]+$/;
		console.log(this.value.lenght);
		return numberRegexp.test(this.value);
	}
}



class NumberOnlyValidator implements Validator {
	value: number;
	constructor(value: number) {
		this.value = value;
	}
	isAcceptable() {
		let numberRegexp = /^[0-9]+$/;
		return numberRegexp.test(this.value.toString());
	}
}

class Validators {
	validators: Validator[];
	addValidator(validator: Validator){
		if (!this.validators){
			this.validators = new Array<Validator>();
		}
		this.validators.push(validator);
	}

	valid() {
		let isValid = true;
		if (this.validators){
			this.validators.forEach((validator: Validator) => {
				console.log("AAAAAAAAAAAAA",validator);
				if (!validator.isAcceptable()){
					isValid = false;
				}
			});
		}
		return isValid;
	}
}

let validators = new Validators();
let a = new LettersOnlyValidator("abc");
let b = new NumberOnlyValidator(111);
let c = new LettersMinValidator("sddd88");
// validators.addValidator(a);
// validators.addValidator(b);
validators.addValidator(c);

console.debug("VALID:", validators.valid());
