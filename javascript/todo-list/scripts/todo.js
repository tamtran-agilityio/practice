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

// set event when add one element
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

function addTodo(todo, type, id, value) {
	// body...
	var todoListNode = document.getElementById('todo-list');
	todo.todoListNode.appendChild(createTodoHtml(value, type, id));
}

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

// set status toggle when checked one or all item
Todo.prototype.setStatusToggle = function setStatusToggle(listObj) {
	// body...
	var status;
	var count = 0;
	var todoToggleAll = document.getElementById('toggle-all');
	for (count; count < listObj.length; count++) {
		status = listObj[count].type;
		if (status === 'active') {
			break;
		};
	};

	if (count < listObj.length) {
		todoToggleAll.checked = false;
	} else {
		todoToggleAll.checked = true;
	}
};