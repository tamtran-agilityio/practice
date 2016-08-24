import {Component, ContentChildren, Inject, ChangeDetectionStrategy} from '@angular/core';
import {TodoActions} from './actions/action';

@Component({
  selector: 'todo',
  inputs: ['completed', 'id'],
  template: `
    <li (click)="onTodoClick(id)"
      [style.textDecoration]="completed?'line-through':'none'">
      <ng-content></ng-content>
    </li> 
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Todo { 
  constructor(
    @Inject('AppStore') private appStore: AppStore, 
    private todoActions: TodoActions
  ){ }
  
  private onTodoClick(id){
    this.appStore.dispatch(this.todoActions.toggleTodo(id));
  }
  
  private removeTodo(id){
    this.appStore.dispatch(this.todoActions.removeTodo(id));
  }
}