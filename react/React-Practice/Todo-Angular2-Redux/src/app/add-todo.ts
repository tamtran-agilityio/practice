import {Component, Inject} from '@angular/core';
import {TodoActions} from './actions/action';

@Component({
  selector: 'add-todo', 
  template: 
    `<div>
      <input type="text"></input>
      <button (click)="addTodo(todo)">Add todo</button>
    </div>`
})
export class AddTodo {
  constructor( @Inject('AppStore') private appStore: AppStore, private todoActions: TodoActions){ 
  }
  
  private addTodo(input) {
    this.appStore.dispatch(this.todoActions.addTodo(input.value));
    input.value = '';
  }
}