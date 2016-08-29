import {Component, ContentChildren, Inject, ChangeDetectionStrategy} from '@angular/core';
import {TodoActions} from '../actions/todoAction';
import {TodoCollection} from '../services/collection'

@Component({
  selector: 'todo',
  inputs: ['completed', 'id'],
  providers: [TodoCollection],
  template: `
    <li (click)="onTodoClick(id)"
      [style.textDecoration]="completed?'line-through':'none'">
      <input class="toggle" type="checkbox" [checked]="completed" [class.checked]="completed">
      <label><ng-content></ng-content></label>
      <button class="destroy" (click)="removeTodo(id)"></button>
    </li> 
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Todo { 
  constructor(@Inject('AppStore') private appStore: AppStore, private todoActions: TodoActions, private todoCollection: TodoCollection ){
    this.todoCollection = todoCollection;
  }
  
  private onTodoClick(id){
    this.appStore.dispatch(this.todoActions.toggleTodo(id));
    this.todoCollection.checkToogle(id);
  }
  
  private removeTodo(id){
    this.appStore.dispatch(this.todoActions.removeTodo(id));
    this.todoCollection.remove(id);
  }
}