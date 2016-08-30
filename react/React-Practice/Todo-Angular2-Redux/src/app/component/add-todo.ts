import {Component, Inject} from '@angular/core';
import {TodoActions} from '../actions/todoAction';
import {TodoCollection} from '../services/collection';

@Component({
  selector: 'add-todo',
  providers: [TodoCollection], 
  template: 
    `<div class="header">
      <h1>todos</h1>
      <input #todo (keyup.enter)="addTodo(todo)" class="new-todo" placeholder="What needs to be done?">
    </div>`
})

export class AddTodo {
  constructor( @Inject('AppStore') private appStore: AppStore, private todoActions: TodoActions, private todoCollection: TodoCollection) {
    this.todoCollection = todoCollection;
  }
  
  /**
   * @details [handle add todo]
   * 
   * @param  [value add todo]
   */
  private addTodo(input) {
    let id = Math.random() * 100 + 1;
    if (input.value === '') {
      return;
    }
    this.appStore.dispatch(this.todoActions.addTodo(input.value, id));
    this.todoCollection.add(input.value, id);
    input.value = '';
  }
}