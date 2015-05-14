var clearButton = document.getElementById('clear-button');
var activeTodoButton = document.getElementById('active-todo');
var completedTodoButton = document.getElementById('completed-todo');
var todo = new Todo();

var toggleAllButton = document.getElementById('toggle-all');

var todolits =new TodoList(todo);
//var allTodoButton = document.getElementById('all-todo');

// addHandler(clearButton, 'click', removeCompletedTodo);
// addHandler(toggleAllButton, 'click', toggleAllCheckbox);
// addHandler(allTodoButton, 'click', filterAllTodo);
// addHandler(activeTodoButton, 'click', filterActiveTodo);
// addHandler(completedTodoButton, 'click', filterCompletedTodo);

countItem(todo.todoListObj);