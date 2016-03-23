var LettersOnlyValidator = (function () {
    function LettersOnlyValidator(value) {
        this.value = value;
    }
    LettersOnlyValidator.prototype.isAcceptable = function () {
        var lettersRegexp = /^[A-Za-z]+$/;
        return lettersRegexp.test(this.value);
    };
    return LettersOnlyValidator;
}());
var LettersMinValidator = (function () {
    function LettersMinValidator(value) {
        this.value = value;
    }
    LettersMinValidator.prototype.isAcceptable = function () {
        var numberRegexp = /^[6]+$/;
        return numberRegexp.test((this.value).length);
    };
    return LettersMinValidator;
}());
var NumberOnlyValidator = (function () {
    function NumberOnlyValidator(value) {
        this.value = value;
    }
    NumberOnlyValidator.prototype.isAcceptable = function () {
        var numberRegexp = /^[0-9]+$/;
        var lettersRegexp = /^[A-Za-z]+$/;
        var lengthValue = (this.value).length;
        if (lengthValue === 6) {
            console.log("Max lenght 6");
            return;
        }
        if (numberRegexp.test(this.value.toString())) {
            console.log("numberRegexp");
            console.log(numberRegexp.test(this.value.toString()));
            return numberRegexp.test(this.value.toString());
        }
        else if (lettersRegexp.test(this.value)) {
            console.log("lettersRegexp");
            return lettersRegexp.test(this.value);
        }
        else {
            console.log("Not avadtion");
        }
    };
    return NumberOnlyValidator;
}());
var Validators = (function () {
    function Validators() {
    }
    Validators.prototype.addValidator = function (validator) {
        if (!this.validators) {
            this.validators = new Array();
        }
        this.validators.push(validator);
    };
    Validators.prototype.isAcceptable = function () {
        var isValid = true;
        if (this.validators) {
            this.validators.forEach(function (validator) {
                console.log(validator);
                if (!validator.isAcceptable()) {
                    isValid = false;
                }
            });
        }
        return isValid;
    };
    return Validators;
}());
var validators = new Validators();
// let a = new LettersOnlyValidator("abc");
var b = new NumberOnlyValidator("sfsfsd7888t55");
// let c = new LettersMinValidator("ssdd88");
// validators.addValidator(a);
validators.addValidator(b);
// validators.addValidator(c);
console.debug("VALID:", validators.isAcceptable());
