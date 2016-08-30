import {Component, ContentChildren, Inject, ChangeDetectionStrategy} from '@angular/core';
import {TodoActions} from '../actions/todoAction';
import {TodoCollection} from '../services/collection'
let templateTodo = require('./todo.html'); 

@Component({
  selector: 'todo',
  inputs: ['completed', 'id'],
  providers: [TodoCollection],
  template: templateTodo,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Todo { 
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
}