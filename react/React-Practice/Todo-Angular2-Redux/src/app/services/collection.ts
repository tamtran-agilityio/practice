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
        (todo: {text: string, id: number , completed: boolean}) => {
          let _todo = new Todo(todo.text, todo.id);
           _todo.completed = todo.completed;
          return _todo;
        });
    } else {
      this.todos = []
    }
  }

  updateToogle(idParam: number) {
    let persistedTodo = Store.getItemFromStore('todos');
    let itemToogle: any;
    persistedTodo.forEach( (todo: any, idx: number) => {
      if (todo.id === idParam){
        itemToogle = {
          completed:!todo.completed,
          editing:todo.editing,
          id:todo.id,
          text:todo.text
        }
      }
    });
    return itemToogle;
  }

  private updateStore(todoParam: Todo) {
    let found = false;
    let persistedTodo = Store.getItemFromStore('todos');
    persistedTodo.forEach( (todo: any, idx: number, private id: any) => {
      if (todo.id === todoParam.id){
        persistedTodo[idx] = todoParam;
        found = true;
      }
    });

    if (!found) {
      persistedTodo.push(todoParam);
    }

    Store.updateItemToStore('todos', JSON.stringify(persistedTodo));
  }

  getTodos() {
    return Store.getItemFromStore('todos');
  }

  add(text: string, idParam: number) {
    let item = new Todo(text, idParam);
    this.updateStore(item);
  }

  checkToogle(idParam: number) {
    let item = this.updateToogle(idParam);
    this.updateStore(item);
  }

  remove(idParam: number) {
    let persistedTodo = Store.getItemFromStore('todos');
    let todos = [];
    persistedTodo.forEach( (todo: any, idx: number) => {
      if (todo.id !== idParam){
        todos.push(todo);
      }
    });

    Store.updateItemToStore('todos', JSON.stringify(todos));
  }

  countTodo() {
    let persistedTodo = Store.getItemFromStore('todos');
    let count = 0;
    persistedTodo.forEach( (todo: any) => {
      if (!todo.completed){
        count++;
      }
    });
    return count;
  }
}