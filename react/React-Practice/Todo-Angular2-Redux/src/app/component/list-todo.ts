import {Component, Inject, OnDestroy} from '@angular/core';
import {TodoCollection} from '../services/collection'

@Component({
  selector: 'todo-list',
  providers: [TodoCollection]
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
  constructor( @Inject('AppStore') private appStore: AppStore, private todoCollection: TodoCollection) {
    this.todoCollection = todoCollection;
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
