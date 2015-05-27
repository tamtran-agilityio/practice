// RegExp.prototype.test
var str = "The best things in life are free";
var patt = new RegExp("e");
var res = patt.test(str);
console.log(patt.test(str));

// RegExp.prototype.search
function searchFunction() {
	var str = "Visit W3Schools!";
	var n = str.search(/w3Schools/i);
}
console.log(searchFunction());