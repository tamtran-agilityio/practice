// manager earch item just to add
function TodoItem(id, type, value) {
	// body...
	this.id = id;
	this.type = type;
	this.value = value;
}

TodoItem.prototype.addItem = function addItem(todoListNode) {
	// body...
	var todoNode = createTodoHtml(this.value, this.type, this.id);
	var checkbox = todoNode.getElementsByClassName('todo-view')[0].getElementsByClassName('checkbox')[0];
	var del = todoNode.firstChild.getElementsByClassName('delete')[0];
	var label = todoNode.getElementsByTagName('label')[0];
	var edit = todoNode.getElementsByClassName('todo-edit')[0];

	addHandler(checkbox, 'change', method(this, 'checkItemTodo'));
	addHandler(del, 'click', method(this, 'deleteItem'));
	addHandler(label, 'dblclick', method(this, 'editItem'));
	addHandler(edit, 'blur', method(this, 'closeEditTodoBlur'));
	addHandler(edit, 'keydown', method(this, 'closeEditTodoKeydown'));

	todoListNode.appendChild(todoNode);
	todo.todoActive.setLeftItem(todo.todoListItem);
	todo.setStatusToggle(todo.todoListItem);
};

// set when checkbox earch Item
TodoItem.prototype.checkItemTodo = function checkItemTodo(event) {
	// body...
	var item = event.target;
	var todoItem = item.parentNode.parentNode;
	var itemId = todoItem.getAttribute('item-id');

	if (item.checked) {
		addClass(todoItem, 'completed');
		if (itemId !== null) {
			this.type = 'completed';
		}
	} else {
		removeClass(todoItem, 'completed');
		if (itemId !== null) {
			this.type = 'active';
		}
	}

	todo.todoActive.setLeftItem(todo.todoListItem);
	todo.setStatusToggle(todo.todoListObj);
};

TodoItem.prototype.findObject = function findObject(todoListObj, id) {
	// body...
	for (var i = 0; i < todoListObj.length; i++) {
		if (todoListObj[i].id === id) {
			return i;
		}
	};
};

TodoItem.prototype.deleteItem = function deleteItem(event) {
	// body...
	var item = event.target.parentNode.parentNode;
	var id = item.getAttribute('item-id');
	var parent = item.parentNode;
	var arrayObject = this.findObject(todo.todoListObj, parseInt(id));
	todo.todoListObj.splice(arrayObject, 1);
	parent.removeChild(item);
	todo.setStatusToggle(todo.todoListObj);
};

TodoItem.prototype.editItem = function editItem(event) {
	// body...
	var item = event.target.parentNode.parentNode;
	var todoView = item.getElementByClassName('todo-view')[0];
	var todoEdit = item.getElementByClassName('todo-edit')[0];

	todoEdit.value = view.textContent.substring(0, todoView.textContent.length - 1);
	todoView.style.display = 'none';
	todoEdit.style.display = 'block';
	todoEdit.focus();
};

TodoItem.prototype.closeEditTodoBlur = function closeEditTodoBlur(event) {
	var todoNode = event.target.parentNode;

	this.editTodoContent(todoNode);
};

TodoItem.prototype.closeEditTodoKeydown = function closeEditTodoKeydown(event) {
	var todoNode = event.target.parentNode;

	if (event.keyCode === 13) {
		this.editTodoContent(todoNode);
	}

	if (event.keyCode === 27) {
		todoNode.getElementsByClassName('todo-view')[0].style.display = 'block';
		todoNode.getElementsByClassName('todo-edit')[0].style.display = 'none';
	}
};

TodoItem.prototype.editTodoContent = function editTodoContent(todoNode) {
	var view = todoNode.getElementsByClassName('todo-view')[0];
	var edit = todoNode.getElementsByClassName('todo-edit')[0];
	var id;

	if (edit.style.display !== 'none') {
		view.getElementsByTagName('label')[0].textContent = edit.value;
		id = todoNode.getAttribute('item-id');
		if (edit.value === '') {
			todoNode.getElementsByClassName('delete')[0].click();
			todoList.todoControl.setLeftItem(todoList.todoListItem);
		} else {
			this.value = edit.value;
		}
	}

	view.style.display = 'block';
	edit.style.display = 'none';
};