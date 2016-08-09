import { Component } from 'angular2/core';
import { Todo } from './todo';
import { TodoList } from './todo-list';
import { TodoForm } from './todo-form';

@Component({
	selector:'my-app',
	templateUrl: 'app/app.component.html',
	directives: [TodoList, TodoForm]
})

export class AppComponent {
	todos: Todo[] = [];

	get remaining() {
		return this.todos.reduce((count: number, todo: Todo) => count + +!todo.done, 0);
	}
	archive(): void {
		var oldTodos = this.todos;
		this.todos = [];
		oldTodos.forEach((todo: Todo) => {
			if (!todo.done) this.todos.push(todo);
		});
	}
	addTask(task: Todo) {
		this.todos.push(task);
	}
}
