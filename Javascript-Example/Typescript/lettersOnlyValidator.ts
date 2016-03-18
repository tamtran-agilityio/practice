import validation = require('./validation');
module Validation {
	var lettersRegexp = /[A-Za-z]+$/;
	export class LettersOnlyValidator implements StringValidator {
		isAcceptable(s: string) {
			return lettersRegexp.test(s);
		}
	}
}
