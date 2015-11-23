// object add todo
function Todo() {
	// body...
	this.todoActive = new TodoActive(this);
	this.todoListItem = [];
	this.todoListNode = document.getElementById('todo-list');
	var toggleAllButton = document.getElementById('toggle-all');

	this.todoInputNode = document.getElementById('input-todo');
	addHandler(this.todoInputNode, 'keydown', method(this, 'addNewTodo'));
	addHandler(toggleAllButton, 'click', method(this, 'toggleAllCheckbox'));
	this.id = 0;
}

// set event when add one element
Todo.prototype.addNewTodo = function addNewTodo(event) {
	// body...
	var nodeValue = this.todoInputNode.value;
	var filterCompletedTodoButton = document.getElementById('completed-todo');
	var todoToggleAll = document.getElementById('toggle-all');

	if (event.keyCode === 13 && nodeValue !== '') {
		var todoItem = new TodoItem(this.id++, 'active', nodeValue);
		this.todoListItem.push(todoItem);
		if (filterCompletedTodoButton.getAttribute('class').indexOf('btn-active') === -1) {
			// if current panel is not completed
			todoItem.addItem(this.todoListNode);
		}
	}
	this.todoInputNode.value = ' ';
	todoToggleAll.checked = false;
};

// set checkbox value
Todo.prototype.toggleAllCheckbox = function toggleAllCheckbox() {
	var status;
	var toggleAllButton = document.getElementById('toggle-all');
	if (toggleAllButton.checked) {
		status = 'completed';
	} else {
		status = 'active';
	}

	for (var i = 0; i < this.todoListItem.length; i++) {
		this.todoListItem[i].type = status;
	}

	this.todoActive.fakeFilterEvent();
};

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