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
    persistedTodo.forEach( (todo: any, idx: number) => {
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
    let arrRemove = [];
    persistedTodo.forEach( (todo: any, idx: number) => {
      if (todo.id !== idParam){
        arrRemove.push(todo);
      }
    });

    Store.updateItemToStore('todos', JSON.stringify(arrRemove));
  }

  removeComplete() {
    let persistedTodo = Store.getItemFromStore('todos');
    let arr = [];
    persistedTodo.forEach( (todo: any, idx: number) => {
      if (todo.completed === false){
        arr.push(todo);
      }
    });

    Store.updateItemToStore('todos', JSON.stringify(arr));
  }

  completeAllTodo(checked) {
    let persistedTodo = Store.getItemFromStore('todos');
    let arrComplete = [];
    let itemToogles: any;
    persistedTodo.forEach( (todo: any, idx: number) => {
      itemToogles = {
        completed: checked,
        editing:todo.editing,
        id:todo.id,
        text:todo.text
      };
      arrComplete.push(itemToogles);
    });
    Store.updateItemToStore('todos', JSON.stringify(arrComplete));
  }

  countTodo() {
    let persistedTodo = Store.getItemFromStore('todos');
    let count = 0;
    persistedTodo.forEach( (todo: any) => {
      if (todo.completed === false){
        ++count;
      }
    });
    return count;
  }
}