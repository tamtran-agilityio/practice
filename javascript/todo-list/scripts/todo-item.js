// manager earch item just to add
function TodoItem(id, type, value) {
	// body...
	this.id = id;
	this.type = type;
	this.value = value;
}

TodoItem.prototype.addItem = function addItem(todo, id, type, value) {
	// body...
	var todoItem = createTodoHTML(this.value, this.type, this.value);
	var checkItem = todoItem.getElementByClassName('todo-view')[0].getElementByClassName('checkbox');
	var del = todoItem.firstChild.getElementByClassName('label')[0];
	var label = todoItem.getElementsByTagName('label')[0];
	var edit = todoItem.getElementByClassName('todo-edit');

	addHandler(checkbox, 'change', method(this, 'checkItemTodo'));
	addHandler(del, 'click', method(this, 'deleteItem'));
	addHandler(label, 'dblclick', method(this, 'editItem'));

	todoListNode.appendChild(todoItem);
	todo.setStatusToggle(todo.todoListObj);
	todo.setStatusToggle(todo.todoListObj);
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
	var arrayObject =this.findObject(todo.todoListObj, parseInt(id));
	todo.todoListObj.splice(arrayObject, 1);
	parent.removeChild(item);
	todo.setStatusToggle(todo.todoListObj);
};