// object add todo
function Todo() {
	// body...
	this.todoListObj = [];
	this.todoListNode = document.getElementById('todo-list');
	this.todoInputNode = document.getElementById('input-todo');
	this.todoToggleAll = document.getElementById('toggle-all');
	addHandler(this.todoInputNode, 'keydown', method(this, 'addNewTodo'));
	addHandler(this.todoToggleAll, 'click', method(this, 'selectAllItem'));
	this.id = 0;
}

Todo.prototype.addNewTodo = function addNewTodo(event) {
	// body...
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
		this.todoInputNode.value = ' ';
	}
};

// set checkbox value
Todo.prototype.selectAllItem = function selectAllItem(event) {
	// body...
	var checkBox = document.getElementsByClassName('checkbox'),
		node = event.target;

	for (var i = 0; i < checkBox.length; i++) {
		if (node.checked) {
			checkBox[i].checked = true;
		} else {
			checkBox[i].checked = false;
		}
	}
}

function addTodo(todo, type, id, value) {
	var todoListNode = document.getElementById('todo-list');
	todo.todoListNode.appendChild(createTodoHtml(value, type, id));
}

function TodoList() {
	this.todoListObj = [];
	var todoListNode = document.getElementById('todo-list');
	var lastTodo = todo.todoListNode.lastChild;
	var del = lastTodo.firstChild.getElementsByClassName('delete')[0];
	addHandler(lastTodo, 'mouseover', method(todo, 'showObject'));
  	addHandler(lastTodo, 'mouseout', method(todo, 'hiddenObject'));

}

TodoList.prototype.showObject = function showObject(event) {
	// body...
	var parent = event.target.parentNode;
	var del = parent.getElementsByClassName('.delete');
	del[0].style.display = 'block';
};

TodoList.prototype.hiddenObject = function hiddenObject(event) {
	// body...
	var parent = event.target.getElementsByClassName('.delete');
	var del = parent.getElementsByClassName('delete');
	del[0].style.display = 'none';
};

TodoList.prototype.updateCheck = function updateCheck (event) {
	// body...

}

Todo.prototype.findItemInTodoListObj = function findItemInTodoListObj(id) {
	'use strict';
	for (var i = 0; i < todo.todoListObj.length; i++) {
		if (todo.todoListObj[i].id === id) {
			return i;
		}
	}
};
function Todoapp() {
	// body...
	this.todoListObj = [];
	var clearButton = document.getElementById('clear-button');
	var toggleAllButton = document.getElementById('toggle-all');
	var allTodoButton = document.getElementById('all-todo');
	var activeTodoButton = document.getElementById('active-todo');
	var completedTodoButton = document.getElementById('completed-todo');

	//addHandler(clearButton, 'click', removeCompletedTodo);
	//addHandler(toggleAllButton, 'click', toggleAllCheckbox);
	// addHandler(allTodoButton, 'click', filterAllTodo);
	// addHandler(activeTodoButton, 'click', filterActiveTodo);
	// addHandler(completedTodoButton, 'click', filterCompletedTodo);
}