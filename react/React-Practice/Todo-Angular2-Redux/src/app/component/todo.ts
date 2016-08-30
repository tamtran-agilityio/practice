import {Component, ContentChildren, Inject, ChangeDetectionStrategy, trigger, state, style, animate, transition} from '@angular/core';
import {TodoActions} from '../actions/todoAction';
import {TodoCollection} from '../services/collection'
let templateTodo = require('./todo.html'); 

@Component({
  selector: 'todo',
  inputs: ['completed', 'text', 'id'],
  providers: [TodoCollection],
  template: templateTodo,
  animations: [
    trigger('todoState', [
      state('incompleted', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('completed',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('incompleted => completed', animate('100ms ease-in')),
      transition('completed => incompleted', animate('100ms ease-out'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Todo {
  editing: boolean;
  state: string;
  constructor(@Inject('AppStore') private appStore: AppStore, private todoActions: TodoActions, private todoCollection: TodoCollection ){
    this.todoCollection = todoCollection;
  }
  
  /**
   * @details [set toggle]
   * 
   * @param  [id: value need changle]
   */  
  private onTodoClick(id){
    this.appStore.dispatch(this.todoActions.toggleTodo(id));
    this.todoCollection.checkToogle(id);
  }
  
   /**
   * @details [delete item on list todos]
   * 
   * @param  [id: value need changle]
   */ 
  private removeTodo(id){
    this.appStore.dispatch(this.todoActions.removeTodo(id));
    this.todoCollection.remove(id);
  }

  /**
   * @details [show input edit item todo]
   * 
   * @param  [event double click edit]
   * @return [value change]
   */
  private onTodoClickEdit(event, value) {
    event.preventDefault();
    this.editing = true;
  }

  private editTodo(input, id) {
    this.appStore.dispatch(this.todoActions.editTodo(input.value, id));
    this.todoCollection.getEdit(input.value, id);
    this.editing = false;
  }
}