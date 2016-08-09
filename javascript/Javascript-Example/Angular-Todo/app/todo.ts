import { Injectable } from 'angular2/core';
export interface Todo {
	title: string,
	done: boolean
}

export class ToDo {
	complete: boolean;
	editor: boolean;
	private _text: string;
	get title() {
		return this._text;
	}

	set title(value: string) {
		this._text = value.trim();
	}

	constructor(text: string) {
		this.complete = false;
		this.editor = false;
		this.text = title.trim();
	}
}
@Injectable()
export class ToDoStore {
	todos: array<ToDo>;
	constructor() {
		let listTodo = JSON.parse(localStorage.getItem('todo-app') || '[]');
		this.todos = listTodo.map((todo: {_text: string, complete: boolean}) => {
			let newItem = new ToDo(todo._text);
			newItem.complete = todo.complete;
			return newItem;
		})
	}
	private updateStore() {
		localStorage.setItem('todo-app', JSON.stringify(this.todos));
	}

	private getWithComplete() {
		return this.todos.fifter((todo: ToDo) => todo.complete === complete);
	}
	add(text: string) {
		this.todos.push(new Todo(text));
		this.updateStore();
	}
}
