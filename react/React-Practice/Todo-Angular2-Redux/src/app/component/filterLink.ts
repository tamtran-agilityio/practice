import {Component, ContentChildren, Inject, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core';
import {TodoActions} from '../actions/todoAction';

@Component({
  selector: 'filter-link',
  inputs: ['filter'],
  template: 
    `<a href="javascript:void(0)" (click)="applyFilter(filter);"
        [ngClass]="{'active': active, 'inactive': !active}">` +
      `<ng-content></ng-content>` +  
    `</a>`
})
export class FilterLink implements OnInit, OnDestroy {
  active: false;
  filter: any;
  unsubscribe: any;
  constructor(@Inject('AppStore') private appStore: AppStore, private todoActions: TodoActions) {
    this.unsubscribe = this.appStore.subscribe(() => this.updateActive());
  }
  
  //set initial state
  ngOnInit(){
    this.updateActive();
  }
  
  //remove change listener
  ngOnDestroy(){
    this.unsubscribe();
  }
  
  // Helper methods
  private applyFilter(filter) {
    this.appStore.dispatch(this.todoActions.setCurrentFilter(filter));
  }
  
  private updateActive(){
    this.active = (this.filter == this.appStore.getState().currentFilter);
  }
}