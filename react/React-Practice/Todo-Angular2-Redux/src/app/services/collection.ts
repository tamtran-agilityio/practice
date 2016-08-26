import {Todo} from '../models/model';
import {Store} from './store';

export class TodoCollection {
  todos: Array<Todo> = [];

  constructor() {
    this.init();
  }

  private init() {
    let currentTodos = Store.getItemFromStore('todos');
    if (currentTodos) {
      this.todos = currentTodos.map(
        (todo: {_name: string, _id: number , completed: boolean}) => {
          let _todo = new Todo(todo._name, todo._id);
           _todo.completed = todo.completed;
          return _todo;
        });
    } else {
      this.todos = []
    }
  }

  private updateStore() {
    Store.updateItemToStore('todos', JSON.stringify(this.todos));
  }

  add(name: string, id: number) {
    this.todos.push(new Todo(name, id));
    this.updateStore();
  }

  remove(todo: Todo) {
    let index = this.indexOf(todo);
    this.removeAt(index);
    this.updateStore();
  }

  removeAt(index: number) {
    this.todos.splice(index, 1);
  }

  indexOf(todo: Todo) {
    return this.todos.indexOf(todo);
  }
}