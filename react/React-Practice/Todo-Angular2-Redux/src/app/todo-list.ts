import {Component, Inject, OnDestroy} from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <todo 
        *ngFor="let todo of todos | visibleTodos:currentFilter"
        [completed]="todo.completed"
        [id]="todo.id"
      >{{todo.text}}</todo>
    </ul>
  `
})
export class TodoList implements OnDestroy {
  constructor( @Inject('AppStore') private appStore: AppStore ) {
    this.unsubscribe = this.appStore.subscribe(()=> {
      let state = this.appStore.getState();
      this.currentFilter = state.currentFilter;
      this.todos = state.todos;
    });
  }
  
  private ngOnDestroy(){
    //remove listener
    this.unsubscribe();
  }
}