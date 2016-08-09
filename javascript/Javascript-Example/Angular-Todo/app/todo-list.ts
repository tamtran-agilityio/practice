import { Component, Input } from 'angular2/core';
import { Todo } from './todo';
@Component({
	selector:'todo-list',
	templateUrl: 'app/todo-list.html'
})
export class TodoList {
	@Input() todos: Array<Todo>;
}
