// object add todo
function Todo() {
	// body...
	this.todoAction = new TodoActive(this);
	this.todoListItem = [];
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
	var filterCompletedButton = document.getElementById('complete-todo');
	var todoToggleAll = document.getElementById('toggle-all');

	if (event.keyCode === 13 && nodeValue !== '') {
		var todoItem = new TodoItem(this.id++, 'active', nodeValue);
		if (completedTodoButton.getAttribute('class').indexOf('btn-active') === -1) {
			todoItem.addItem(this.todoListNode);
		}
		this.todoInputNode.value = ' ';
		todoToggleAll.checked = false;
	}
};

// set checkbox value
Todo.prototype.selectAllItem = function selectAllItem(event) {
	// body ...
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