// object add todo
function Todo(todoListObj) {
	// body...
	this.todoListObj = [];
	this.todoListNode = document.getElementById('todo-list');
	this.todoInputNode = document.getElementById('input-todo');
	addHandler(this.todoInputNode, 'keydown', method(this, 'addNewTodo'));
	this.id = 0;
}


Todo.prototype.addNewTodo = function addNewTodo(event) {
	// body...
	'use strict';
	var nodeValue = this.todoInputNode.value;
	if (event.keyCode === 13 && nodeValue !== '') {
		if (completedTodoButton.getAttribute('class').indexOf('btn-active') === -1) {

			addTodo(this, 'active', this.id, nodeValue);
		}
		// add item to list
		var todoObj = {
			id: this.id++,
			type: 'active',
			value: nodeValue
		};
		this.todoListObj.push(todoObj);
		countItem(this.todoListObj);
		this.todoInputNode.value = '';
	}
};

var todoListNode = document.getElementById('todo-list');

function addTodo(todo, type, id, value) {
	'use strict';
	todo.todoListNode.appendChild(createTodoHtml(value, type, id));

	countItem(todo.todoListObj);

}

function TodoList() {
	// body...
	var todoListNode = [];
	var lastTodo = todo.todoListNode.lastChild;
	// var del = lastTodo.firstChild.getElementsByClassName('delete')[0];
	// var checkbox = lastTodo.getElementsByClassName('todo-view')[0].getElementsByClassName('checkbox')[0];
	// var label = lastTodo.getElementsByTagName('label')[0];
	// var edit = lastTodo.getElementsByClassName('todo-edit')[0];
	addHandler(lastTodo, 'mouseover', method(todo, 'displayObject'));
	addHandler(lastTodo, 'mouseout', method(todo, 'hideObject'));
	addHandler(del, 'click', method(todo, 'deleteObject'));
	// addHandler(checkbox, 'change', method(todo, 'checkTodo'));
	// addHandler(label, 'dblclick', method(todo, 'editTodo'));
	// addHandler(edit, 'blur', method(todo, 'closeEditTodoBlur'));
	// addHandler(edit, 'keydown', method(todo, 'closeEditTodoKeydown'));

	countItem(todo.todoListObj);
}

//show node when move mouse into object
TodoList.prototype.displayObject = function displayObject(event) {
	// body...
	'use strict';
	var parent = event.target.parentNode;
	var del = parent.getElementsByClassName('delete');
	del[0].style.display = 'block';
};

//Show node when move mouse off the object
TodoList.prototype.hideObject = function hideObject(event) {
	// body...
	'use strict';
	var parent = event.target.parentNode;
	var del = parent.getElementsByClassName('delete');
	del[0].style.display = 'none';
};

// Delete when click mouse into object
TodoList.prototype.deleteObject = function deleteObject(event) {
	// body...
	'use strict';
	var node = event.target.parentNode.parentNode;
	var id = node.getAttribute('data-id');
	var parent = node.parentNode;

	this.todoListObj.splice(this.infoItemListObj(id), 1);
	parent.removeChild(node);
	countItem(this.todoListObj);
};

//Set state toggle
function toggleAllCheckbox() {
	'use strict';
	var state;

	if (toggleAllButton.checked) {
		state = 'completed';
	} else {
		state = 'active';
	}

	for (var i = 0; i < todo.todoListObj.length; i++) {
		todo.updateStatus(todo.todoListObj[i].id, state);
	}

	countItem(todo.todoListObj);
	TodoFilterEvent();
}

// Set state checkbox toggle
function setStateToggle(listobj) {
	// body...
	'use strict';
	var status;
	var count = 0;

	for (count; count < listobj.length; count++) {
		status = listobj[count].type;
		if (status === 'active') {
			break;
		}
	}

	if (count < listobj.length) {
		toggleAllButton.checked = false;
	} else {
		toggleAllButton.checked = true;
	}
}
Todo.prototype.updateStatus = function updateStatus(id, status) {
	'use strict';
	var nodeId = this.infoItemListObj(Number(id));
	this.todoListObj[nodeId].type = status;
};

Todo.prototype.infoItemListObj = function infoItemListObj(id) {
	for (var i = 0; i < todo.todoListObj.length; i++) {
		if (todo.todoListObj[i].id === id) {
			return i;
		}
	}
};

Todo.prototype.checkTodo = function checkTodo(event) {
	'use strict';
	var node = event.target;
	var todoNode = node.parentNode.parentNode;
	var dataId = todoNode.getAttribute('data-id');

	if (node.checked) {
		addClass(todoNode, 'completed');
		if (dataId !== null) {
			this.updateStatus(dataId, 'completed');
		}
	} else {
		removeClass(todoNode, 'completed');
		if (dataId !== null) {
			this.updateStatus(dataId, 'active');
		}
	}

	// set the number of left item
	countItem(this.todoListObj);

	// set status for toggle-all button
	setStateToggle(this.todoListObj);

	TodoFilterEvent();
};

// to value all element
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
	// value object + item-left
	ItemNode.textContent = total + ' item' + (total > 1 ? 's ' : ' ') + 'left';
	if (todo.todoListObj.length - total === 0) {
		clearButton.style.display = 'none';
	} else {
		clearButton.style.display = 'block';
	}
}

function rerenderAllTodoItem(type) {
	'use strict';
	var todoItemObj;

	todoListNode.innerHTML = ' ';
	for (var i = 0; i < todo.todoListObj.length; i++) {
		todoItemObj = todo.todoListObj[i];
		if (todoItemObj.type === type) {
			addTodo(todo, todoItemObj.type, todoItemObj.id, todoItemObj.value);
		} else if (type === 'all') {
			addTodo(todo, todoItemObj.type, todoItemObj.id, todoItemObj.value);
		}
	}
}

function removeClassOfAllChildNode(parent, className) {
	'use strict';
	var childNodeList = parent.getElementsByClassName('button');

	for (var i = 0; i < childNodeList.length; i++) {
		removeClass(childNodeList[i], className);
	}
}

function TodoFilterEvent() {

	//filter event all todo button
	if (allTodoButton.getAttribute('class').indexOf('btn-active') !== -1) {
		allTodoButton.click();
	}

	//filter event active todo button
	if (activeTodoButton.getAttribute('class').indexOf('btn-active') !== -1) {
		activeTodoButton.click();
	}

	//filter event completed todo button
	if (completedTodoButton.getAttribute('class').indexOf('btn-active') !== -1) {
		completedTodoButton.click();
	}
}

function filterAllTodo(event) {
	'use strict';
	var node = event.target;

	rerenderAllTodoItem('all');
	removeClassOfAllChildNode(node.parentNode.parentNode, 'btn-active');
	addClass(node, 'btn-active');
}

function filterActiveTodo() {
	'use strict';
	var node = event.target;
	rerenderAllTodoItem('active');
	removeClassOfAllChildNode(node.parentNode.parentNode, 'btn-active');

	addClass(node, 'btn-active');

}