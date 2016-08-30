import {Component, Inject, OnDestroy} from '@angular/core';
import {TodoActions} from '../actions/todoAction';
import {TodoCollection} from '../services/collection';
import {Todo} from '../models/model';

@Component({
  selector: 'todo-list',
  providers: [TodoCollection],
  template: `
    <ul class='todo-list'>
      <input type="checkbox" class='toggle-all'(click)="onClickAllComplete($event)"/>
      <todo
        *ngFor="let todo of todos | visibleTodos:currentFilter"
        [completed]="todo.completed"
        [id]="todo.id"
        class='view'
      >{{todo?.text}}</todo>
    </ul>
  `
})
export class TodoList implements OnDestroy {
  todos: Todo[] = [];
  currentFilter: string;
  unsubscribe: any;
  constructor( @Inject('AppStore') private appStore: AppStore, private todoCollection: TodoCollection, private todoActions: TodoActions) {
    this.todoCollection = todoCollection;
    let state = this.appStore.getState();
    this.currentFilter = state.currentFilter;
    this.todos = state.todos;
    this.unsubscribe = this.appStore.subscribe(()=> {
      let state = this.appStore.getState();
      this.currentFilter = state.currentFilter;
      this.todos = state.todos;
    });
  }
  
  //remove listener
  ngOnDestroy(){
    this.unsubscribe();
  }

  onClickAllComplete(event) {
    var target : any = event.target;
    var checked = target.checked;
    this.appStore.dispatch(this.todoActions.completeAll(checked));
    this.todoCollection.completeAllTodo(checked);
  }
}
