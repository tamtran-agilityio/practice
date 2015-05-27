//create array literal
var array = ['a', 'b', 'c', 'd'];
//call element 0
array[0] // result a
	// length array 
array.length; //result 4;
//remove element
array.length = 2;
// appemd an elment 
array[array.length] = 'e';
//method push()
array.push('d');


// Array are maps, not tuples
var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr //result ['a',,[b]]


/*multidimensional array
// Create the Tic-tac-toe board
*/
var rows = [];
for (var rowCount = 0; rowCount < 3; rowCount++) {
	rows[rowCount] = [];
	for (var colCount = 0; colCount < 3; colCount++) {
		rows[rowCount][colCount] = '.';
	}
}

//Set an X in the upper right corner
rows[0][2] = 'X'; // [row][column]
// Print the board
rows.forEach(function(row) {
	console.log(row.join(' '));
});

// write function count element
function countElements(arr) {
		// body...
		var countEle = 0;
		arr.forEach(function() {
			countEle++;
		});
		return countEle;
	}
	// call function countElements
countElements(['a', 'b']); //result 2

//Creating Holes
var arr = [];
arr[0] = 'a';
arr[1] = 'b';
1 in arr //hole at index 1 
	// result true

//Sparse Arrays Versus Dense Arrays
var sparse = [, , 'b'];
var dense = [undefined, undefined, 'c'];

// length 
sparse.length //result 3
dense.length // result 3
0 in sparse // false
0 in dense // true

//Array iteration methods
//['a','b'].forEach(function (x,i) { console.log(i+'.'+x) })

// Array.prototype.splice
arr.splice(1, 2, 'X');

// Sorting and Reversing Elements
//reverse
var arr = ['a', 'b', 'c'];
arr.reverse()

//sort array
var arr = ['banana', 'apple', 'pear', 'orange'];
arr.sort()

// comparing number
function compareCanonically(a, b) {
	if (a < b) {
		return -1;
	} else if (a > b) {
		return 1;
	} else {
		return 0;
	}
}

// function compareCanonically(a, b) {
// 	return a < b ? -1(a > b ? 1 : 0)
// 	}
	// invoke compareCanonically
var sortArray = ['-1,', '10', '-23', '25'];
sortArray.sort(); // [-23, -1, 10 , 25]

// comparing string 
['c', 'a', 'b'].sort(function(a, b) {
	return a.localeCompare(b)
})

// comparing object
var arrayObjet = [{
	name: 'Tran'
}, {
	name: 'Like'
}, {
	name: 'Matt'
}]

function compareNames(a, b) {
	return a.name.localeCompare(b.name);
}

arrayObjet.sort(compareNames); //

//Concatenating, Slicing, Joining
var arr = [ 'a', 'b' ];
arr.concat('c', ['d', 'e'])
//result ['a','b','c','d','e']

var arr = ['a','b','c','d'];
arr.slice(1, 2); // ['b','c']

//join
[3, 3, 3].join('-'); // "3-3-3" 
[3, 3, 3].join('');// "333"
[3, 3, 3].join();//"3,3,3"

// searcher values
[1,7,3,9,5,4].indexOf(3); //2 
[1,7,3,9,5,4].indexOf(3,5); // -1
