import { Component, Output, EventEmitter } from 'angular2/core';
import { Todo } from './todo';
import { Injectable } from 'angular2/core';

@Component({
	selector:'todo-form',
	templateUrl: 'app/todo-form.html'
})

@Injectable()
export class TodoForm {
	@Output() newTask = new EventEmitter<Todo>();
	task: string = '';

	private updateStore() {
		localStorage.setItem('angular2-todos', JSON.stringify(this.task));
	}

	addTodo() {
		if (this.task) {
			this.newTask.next({text: this.task, done: false});
			this.updateStore();
		}
		this.task = '';
	}
}
