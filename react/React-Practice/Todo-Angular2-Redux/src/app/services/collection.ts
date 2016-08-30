import {Todo} from '../models/model';
import {Store} from './store';

export class TodoCollection {
  todos: Array<Todo> = [];

  constructor() {
    this.init();
  }

  // init value
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

  /**
   * @details [handle update value on localstorage when selected toogle]
   * 
   * @param m [idParam: value item need update]
   */
  updateToogle(idParam: number) {
    let persistedTodo = Store.getItemFromStore('todos');
    let itemToggle: any;
    persistedTodo.forEach( (todo: any, idx: number) => {
      if (todo.id === idParam){
        itemToggle = {
          completed:!todo.completed,
          editing:todo.editing,
          id:todo.id,
          text:todo.text
        }
      }
    });
    return itemToggle;
  }

  /**
   * @details [handle update value on localstorage all value]
   * 
   * @param m [todoParam: value item need update]
   */
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

  /**
   * @details [handle get all item on list todos]
   */
  getTodos() {
    return Store.getItemFromStore('todos');
  }

  /**
   * @details [handle add item on list todos]
   * 
   * @param  [text: value need add on item]
   * @param  [idParam: value need add on item]
   */
  add(text: string, idParam: number) {
    let item = new Todo(text, idParam);
    this.updateStore(item);
  }

  /**
   * @details [handle checked toogle]
   * 
   * @param  [id: Let's need remove]
   */
  checkToogle(idParam: number) {
    let item = this.updateToogle(idParam);
    this.updateStore(item);
  }

  /**
   * @details [handle remove item on list todos]
   * 
   * @param m [id: Let's need remove]
   */
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

  /**
   * @details [handle remove completed]
   */
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

  /**
   * @details [handle completed button]
   * 
   * @param  [checked value]
   */
  completeAllTodo(checked) {
    let persistedTodo = Store.getItemFromStore('todos');
    let arrComplete = [];
    let itemToggles: any;
    persistedTodo.forEach( (todo: any, idx: number) => {
      itemToggles = {
        completed: checked,
        editing:todo.editing,
        id:todo.id,
        text:todo.text
      };
      arrComplete.push(itemToggles);
    });
    Store.updateItemToStore('todos', JSON.stringify(arrComplete));
  }

  /**
   * @details [count list todo not completed]
   */
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