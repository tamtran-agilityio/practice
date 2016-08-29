import {Component, Inject} from '@angular/core'

@Component({
  selector: 'filters',
  template: 
    `<p class='list-filters'>
      <span class="todo-count">{{count}} item left </span>
      <li><filter-link filter="SHOW_ALL">All</filter-link></li>
      <li><filter-link filter="SHOW_ACTIVE">Active</filter-link></li>
      <li><filter-link filter="SHOW_COMPLETED">Completed</filter-link></li>
    </p>`
})

export class Filters {
  unsubscribe: any;
  conut: number;
  constructor( @Inject('AppStore') private appStore: AppStore) {
    let state = this.appStore.getState();
    this.count = state.count;
    this.unsubscribe = this.appStore.subscribe(()=> {
      let state = this.appStore.getState();
      this.count = state.count;
      console.log("SSS", state);
    });
  }
}