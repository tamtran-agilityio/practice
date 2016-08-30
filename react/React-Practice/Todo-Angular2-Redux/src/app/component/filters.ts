import {Component, Inject} from '@angular/core'
import {TodoCollection} from '../services/collection'
import {TodoActions} from '../actions/todoAction';

@Component({
  selector: 'filters',
  providers: [TodoCollection],
  template: 
    `<p class='list-filters'>
      <span class="todo-count">{{count}} item left </span>
      <li><filter-link filter="SHOW_ALL">All</filter-link></li>
      <li><filter-link filter="SHOW_ACTIVE">Active</filter-link></li>
      <li><filter-link filter="SHOW_COMPLETED">Completed</filter-link></li>
      <button [ngClass]="{'clear-completed': completedActive, 'clear-completed-hide': !completedActive}"
      (click)="onClearCompleted()">Clear completed</button>
    </p>`
})

export class Filters {
  unsubscribe: any;
  count: number;
  completedActive: boolean;
  constructor( @Inject('AppStore') private appStore: AppStore, private todoActions: TodoActions, private todoCollection: TodoCollection) {
    this.todoCollection = todoCollection;
    let state = this.appStore.getState();
    this.count = state.count;
    this.completedActive = this.completeAllActive(this.count, state.todos.length);
    this.unsubscribe = this.appStore.subscribe(()=> {
      let state = this.appStore.getState();
      this.count = state.count;
      this.completedActive = this.completeAllActive(this.count, state.todos.length);
    });
  }

  completeAllActive(count, countAll) {
    return (count === countAll) ? true : false; 
  }

  onClearCompleted() {
    this.appStore.dispatch(this.todoActions.clearComplete());
    this.todoCollection.removeComplete();
  }
}