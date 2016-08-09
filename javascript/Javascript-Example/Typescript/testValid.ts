
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
		return numberRegexp.test((this.value).length);
	}
}

class NumberOnlyValidator implements Validator {
	value: any;
	constructor(value: any) {
		this.value = value;
	}
	isAcceptable() {
		let numberRegexp = /^[0-9]+$/;
		let lettersRegexp = /^[A-Za-z]+$/;
		let lengthValue = (this.value).length;
		if (lengthValue === 6) {
			console.log("Max lenght 6");
			return;
		}
		if (numberRegexp.test(this.value.toString())) {
			console.log("numberRegexp");
			console.log(numberRegexp.test(this.value.toString()));
			return numberRegexp.test(this.value.toString());
		} else
		if (lettersRegexp.test(this.value)) {
			console.log("lettersRegexp");
			return lettersRegexp.test(this.value);
		} else {
			console.log("Not avadtion");
		}
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

	isAcceptable() {
		let isValid = true;
		if (this.validators){
			this.validators.forEach((validator: Validator) => {
				console.log(validator);
				if (!validator.isAcceptable()){
					isValid = false;
				}
			});
		}
		return isValid;
	}
}

let validators = new Validators();
let b = new NumberOnlyValidator("sfsfsd7888t55");
validators.addValidator(b);


console.debug("VALID:", validators.isAcceptable());
