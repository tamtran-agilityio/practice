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
        console.log(this.value.lenght);
        return numberRegexp.test(this.value.length);
    };
    return LettersMinValidator;
}());
var NumberOnlyValidator = (function () {
    function NumberOnlyValidator(value) {
        this.value = value;
    }
    NumberOnlyValidator.prototype.isAcceptable = function () {
        var numberRegexp = /^[0-9]+$/;
        return numberRegexp.test(this.value.toString());
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
    Validators.prototype.valid = function () {
        var isValid = true;
        if (this.validators) {
            this.validators.forEach(function (validator) {
                console.log("AAAAAAAAAAAAA", validator);
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
var a = new LettersOnlyValidator("abc");
var b = new NumberOnlyValidator(111);
var c = new LettersMinValidator("sddd88");
// validators.addValidator(a);
// validators.addValidator(b);
validators.addValidator(c);
console.debug("VALID:", validators.valid());
