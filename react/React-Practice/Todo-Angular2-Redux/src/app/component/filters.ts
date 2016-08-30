import {Component, Inject} from '@angular/core'
import {TodoCollection} from '../services/collection'
import {TodoActions} from '../actions/todoAction';

let templateFilter = require('./filters.html'); 

@Component({
  selector: 'filters',
  providers: [TodoCollection],
  template: templateFilter
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

  /**
   * @details [checked condition show button clear completed]
   * 
   * @param t [sum value on list completed]
   * @param l [sum value on list todos]
   */
  completeAllActive(count, countAll) {
    return (count === countAll) ? true : false; 
  }

  /**
   * @details [handle button clear completed]
   */
  onClearCompleted() {
    this.appStore.dispatch(this.todoActions.clearComplete());
    this.todoCollection.removeComplete();
  }
}