function Todo() {
  this.todoListObj = [];
  this.todoListNode = document.getElementById('todo-list');

  this.todoInputNode = document.getElementById('input-todo');
  addHandler(this.todoInputNode, 'keydown', method(this, 'addNewTodo'));

  this.id = 0;
}

Todo.prototype.addNewTodo = function addNewTodo(event) {
  var nodeValue = this.todoInputNode.value;

  if (event.keyCode === 13 && nodeValue !== '') {
    if (completedTodoButton.getAttribute('class').indexOf('btn-active') === -1) {
      // if current panel is not completed
      addTodo(this, 'active', this.id, nodeValue);
    }

    // add item to todoListObj
    var todoObj = {id: this.id++, type: 'active', value: nodeValue};
    this.todoListObj.push(todoObj);
    setLeftItem(this.todoListObj);

    this.todoInputNode.value = '';
  }
};

var todoListNode = document.getElementById('todo-list');

// create one new object 
function addTodo(todo, type, id, value) {
  todo.todoListNode.appendChild(createTodoHtml(value, type, id));

  // Keep the value just entered and assigned to element last
  var lastTodo = todo.todoListNode.lastChild;
  var del = lastTodo.firstChild.getElementsByClassName('delete')[0];
  var checkbox = lastTodo.getElementsByClassName('todo-view')[0].getElementsByClassName('checkbox')[0];
  var label = lastTodo.getElementsByTagName('label')[0];
  var edit = lastTodo.getElementsByClassName('todo-edit')[0];

  addHandler(lastTodo, 'mouseover', method(todo, 'displayDelete'));
  addHandler(lastTodo, 'mouseout', method(todo, 'hideDelete'));
  addHandler(del, 'click', method(todo, 'deleteTodo'));
  addHandler(checkbox, 'change', method(todo, 'checkTodo'));
  addHandler(label, 'dblclick', method(todo, 'editTodo'));
  addHandler(edit, 'blur', method(todo, 'closeEditTodoBlur'));
  addHandler(edit, 'keydown', method(todo, 'closeEditTodoKeydown'));

  setLeftItem(todo.todoListObj);
}

Todo.prototype.displayDelete = function displayDelete(event) {
  var parent = event.target.parentNode;
  var del = parent.getElementsByClassName('delete');

  del[0].style.display = 'block';
};

Todo.prototype.hideDelete = function hideDelete(event) {
  var parent = event.target.parentNode;
  var del = parent.getElementsByClassName('delete');

  del[0].style.display = 'none';
};

Todo.prototype.editTodo = function editTodo(event) {
  var todoNode = event.target.parentNode.parentNode;
  var view = todoNode.getElementsByClassName('todo-view')[0];
  var edit = todoNode.getElementsByClassName('todo-edit')[0];

  edit.value = view.textContent.substring(0, view.textContent.length - 1);
  view.style.display = 'none';
  edit.style.display = 'block';
  edit.focus();
};

Todo.prototype.closeEditTodoBlur = function closeEditTodoBlur(event) {
  var todoNode = event.target.parentNode;

  this.editTodoContent(todoNode);
};

Todo.prototype.closeEditTodoKeydown = function closeEditTodoKeydown(event) {
  var todoNode = event.target.parentNode;

  if (event.keyCode === 13) {
    this.editTodoContent(todoNode);
  }

  if (event.keyCode === 27) {
    todoNode.getElementsByClassName('todo-view')[0].style.display = 'block';
    todoNode.getElementsByClassName('todo-edit')[0].style.display = 'none';
  }
};

Todo.prototype.editTodoContent = function editTodoContent(todoNode) {
  var view = todoNode.getElementsByClassName('todo-view')[0];
  var edit = todoNode.getElementsByClassName('todo-edit')[0];
  var id;

  if (edit.style.display !== 'none') {
    view.getElementsByTagName('label')[0].textContent = edit.value;
    id = todoNode.getAttribute('data-id');
    if (edit.value === '') {
      todoNode.getElementsByClassName('delete')[0].click();
    }else {
      this.todoListObj[this.findItemInTodoListObj(id),1].value = edit.value;
    }
  }

  view.style.display = 'block';
  edit.style.display = 'none';
};

Todo.prototype.deleteTodo = function deleteTodo(event) {
  
  var node = event.target.parentNode.parentNode;
  var id = node.getAttribute('data-id');
  var parent = node.parentNode;

  this.todoListObj.splice(this.findItemInTodoListObj(id), 1);
  parent.removeChild(node);

  setLeftItem(this.todoListObj);
};

Todo.prototype.updateTodoStatus = function updateTodoStatus(id, status) {
  var nodeId = this.findItemInTodoListObj(Number(id));
  this.todoListObj[nodeId].type = status;
};

Todo.prototype.findItemInTodoListObj = function findItemInTodoListObj(id) {
  for (var i = 0; i < todo.todoListObj.length; i++) {
    if (todo.todoListObj[i].id === id) {
      return i;
    }
  }
};

Todo.prototype.checkTodo = function checkTodo(event) {
  var node = event.target;
  var todoNode = node.parentNode.parentNode;
  var dataId = todoNode.getAttribute('data-id');

  if (node.checked) {
    addClass(todoNode, 'completed');
    if (dataId !== null) {
      this.updateTodoStatus(dataId, 'completed');
    }
  }else {
    removeClass(todoNode, 'completed');
    if (dataId !== null) {
      this.updateTodoStatus(dataId, 'active');
    }
  }

  // set the number of left item
  setLeftItem(this.todoListObj);

  // set status for toggle-all button
  setStatusToggleAll(this.todoListObj);

  TodoFilterEvent();
};

var todoListNode = document.getElementById('todo-list');

// To value all element
function setLeftItem(listObj) {
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
  }else {
    clearButton.style.display = 'block';
  }
}


function rerenderAllTodoItem(type) {
  var todoItemObj;

  todoListNode.innerHTML = '';
  for (var i = 0; i < todo.todoListObj.length; i++) {
    todoItemObj = todo.todoListObj[i];
    if (todoItemObj.type === type) {
      addTodo(todo, todoItemObj.type, todoItemObj.id, todoItemObj.value);
    }else if (type === 'all') {
      addTodo(todo, todoItemObj.type, todoItemObj.id, todoItemObj.value);
    }
  }
}

function removeClassOfAllChildNode(parent, className) {
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
  var node = event.target;

  rerenderAllTodoItem('all');
  removeClassOfAllChildNode(node.parentNode.parentNode, 'btn-active');
  addClass(node, 'btn-active');
}

function filterActiveTodo() {
  var node = event.target;

  rerenderAllTodoItem('active');
  removeClassOfAllChildNode(node.parentNode.parentNode, 'btn-active');
  addClass(node, 'btn-active');
}

function filterCompletedTodo() {
  var node = event.target;

  rerenderAllTodoItem('completed');
  removeClassOfAllChildNode(node.parentNode.parentNode, 'btn-active');
  addClass(node, 'btn-active');
}

function toggleAllCheckbox() {
  var status;

  if (toggleAllButton.checked) {
    status = 'completed';
  }else {
    status = 'active';
  }

  for (var i = 0; i < todo.todoListObj.length; i++) {
    todo.updateTodoStatus(todo.todoListObj[i].id, status);
  }

  setLeftItem(todo.todoListObj);
  TodoFilterEvent();
}

// 
function removeCompletedTodo() {
  var status;

  for (var i = 0; i < todo.todoListObj.length; i++) {
    status = todo.todoListObj[i].type;
    if (status === 'completed') {
      todo.todoListObj.splice(i, 1);
      i--;
    }
  }

  TodoFilterEvent();
  if (todo.todoListObj.length === 0) {
    clearButton.style.display = 'none';
  }
}

function setStatusToggleAll(listObj) {
  var status;
  var count = 0;

  for (count; count < listObj.length; count++) {
    status = listObj[count].type;
    if (status === 'active') {
      break;
    }
  }

  if (count < listObj.length) {
    toggleAllButton.checked = false;
  }else {
    toggleAllButton.checked = true;
  }
}
