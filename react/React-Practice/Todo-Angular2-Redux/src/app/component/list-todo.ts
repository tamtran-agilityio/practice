import {Component, Inject, OnDestroy, trigger, state, style, animate, transition} from '@angular/core';
import {TodoActions} from '../actions/todoAction';
import {TodoCollection} from '../services/collection';
import {Todo} from '../models/model';
let templateTodoList = require('./list-todo.html');

@Component({
  selector: 'todo-list',
  providers: [TodoCollection],
  template: templateTodoList ,
  animations: [
    trigger('flyInAdd', [
      state('in', style({transform: 'scale(1)'})),
      transition('void => *', [
        style({transform: 'scale(1.1)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'scale(1)'}))
      ])
    ])
  ]
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
  
  /**
   * @details [remove listener]
   */
  ngOnDestroy(){
    this.unsubscribe();
  }

  /**
   * @details [check all completed]
   * 
   * @param  [event: event when checked]
   */
  onClickAllComplete(event) {
    var target : any = event.target;
    var checked = target.checked;
    this.appStore.dispatch(this.todoActions.completeAll(checked));
    this.todoCollection.completeAllTodo(checked);
  }
}
