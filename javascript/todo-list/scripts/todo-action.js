/* Control button active, all button, completed, clearlink */
function TodoActive(todoListObj) {
	// body...
	this.todoListObj = todoListObj;
	this.todoListObj = todoListObj;
	var clearButton = document.getElementById('clear-button');
	var filterAllTodoButton = document.getElementById('all-todo');
	var filterActiveTodoButton = document.getElementById('active-todo');
	var filterCompletedTodoButton = document.getElementById('completed-todo');

	addHandler(clearButton, 'click', method(this, 'removeCompletedTodo'));
	addHandler(filterAllTodoButton, 'click', method(this, 'filterAllTodo'));
	addHandler(filterActiveTodoButton, 'click', method(this, 'filterActiveTodo'));
	addHandler(filterCompletedTodoButton, 'click', method(this, 'filterCompletedTodo'));
}

// set value of Left Item
TodoActive.prototype.setLeftItem = function setLeftItem(listObj) {
	// body...
	var count = 0;
	var status;
	var leftItem = document.getElementById('total');
	var clearButton = document.getElementById('clear-button');

	// set status active
	for (var i = 0; i < listObj.length; i++) {
		status = listObj[i].type;
		if (status === 'active') {
			count++;
		};
	};

	// set value tag left item
	leftItem.textContent = count + ' ' + 'item' + (count > 1 ? 's' : ' ') + 'left';
	// set state of button clear button
	if (listObj.length - count === 0) {
		clearButton.style.display = 'none';
	} else {
		clearButton.style.display = 'block';
	}
};

// set event filter of button all  
TodoActive.prototype.filterAllTodo = function filterAllTodo(event) {
	var node = event.target;

	this.rerenderAllTodoItem('all');
	this.removeClassOfAllChildNode(node.parentNode.parentNode, 'btn-active');
	addClass(node, 'btn-active');
};

// set event filter of button actice
TodoActive.prototype.filterActiveTodo = function filterActiveTodo(event) {
	var node = event.target;

	this.rerenderAllTodoItem('active');
	this.removeClassOfAllChildNode(node.parentNode.parentNode, 'btn-active');
	addClass(node, 'btn-active');
};

// set event filter of button complete
TodoActive.prototype.filterCompletedTodo = function filterCompletedTodo() {
	var node = event.target;

	this.rerenderAllTodoItem('completed');
	this.removeClassOfAllChildNode(node.parentNode.parentNode, 'btn-active');
	addClass(node, 'btn-active');
};

TodoActive.prototype.rerenderAllTodoItem = function rerenderAllTodoItem(type) {
	var todoItemObj;

	this.todoListObj.todoListNode.innerHTML = '';
	for (var i = 0; i < this.todoListObj.todoListItem.length; i++) {
		todoItemObj = this.todoListObj.todoListItem[i];
		if (todoItemObj.type === type) {
			todoItemObj.addTodo(this.todoListObj.todoListNode);
		} else if (type === 'all') {
			todoItemObj.addTodo(this.todoListObj.todoListNode);
		}
	}
};

TodoActive.prototype.removeClassOfAllChildNode = function removeClassOfAllChildNode(parent, className) {
	var childNodeList = parent.getElementsByClassName('button');

	for (var i = 0; i < childNodeList.length; i++) {
		removeClass(childNodeList[i], className);
	}
};


TodoActive.prototype.removeClassOfAllChildNode = function removeClassOfAllChildNode(parent, className) {
	var childNodeList = parent.getElementsByClassName('button');

	for (var i = 0; i < childNodeList.length; i++) {
		removeClass(childNodeList[i], className);
	}
};

TodoActive.prototype.removeCompletedTodo = function removeCompletedTodo() {
	var status;

	for (var i = 0; i < this.todoListObj.todoListItem.length; i++) {
		status = this.todoListObj.todoListItem[i].type;
		if (status === 'completed') {
			this.todoListObj.todoListItem.splice(i, 1);
			i--;
		}
	}

	this.fakeFilterEvent();
	this.setLeftItem(this.todoListObj.todoListItem);
};

TodoActive.prototype.fakeFilterEvent = function fakeFilterEvent() {
	var filterAllTodoButton = document.getElementById('all-todo');
	var filterActiveTodoButton = document.getElementById('active-todo');
	var filterCompletedTodoButton = document.getElementById('completed-todo');

	if (filterAllTodoButton.getAttribute('class').indexOf('btn-active') !== -1) {
		filterAllTodoButton.click();
	}

	if (filterActiveTodoButton.getAttribute('class').indexOf('btn-active') !== -1) {
		filterActiveTodoButton.click();
	}

	if (filterCompletedTodoButton.getAttribute('class').indexOf('btn-active') !== -1) {
		filterCompletedTodoButton.click();
	}
};