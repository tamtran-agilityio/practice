// count value item
function countItem(listObj) {
	'use strict';
	var total = 0;
	var status;
	var ItemNode = document.getElementById('total');

	for (var i = 0; i < listObj.length; i++) {
		status = listObj[i].type;
		if (status === 'active') {
			total++;
		}
	}

	ItemNode.textContent = total + ' item' + (total > 1 ? 's ' : ' ') + 'left';
	// if (todo.todoListObj.length - total === 0) {
	// 	clearButton.style.display = 'none';
	// } else {
	// 	clearButton.style.display = 'block';
	// }
}
