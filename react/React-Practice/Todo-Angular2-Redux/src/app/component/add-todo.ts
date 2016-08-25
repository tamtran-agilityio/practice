import {Component, ContentChildren, Inject, ChangeDetectionStrategy} from '@angular/core';
import {AppStore} from '../reducer/appStore';
import {TodoActions} from '../actions/action';

let templateHtml = require('./add-todo.html');

@Component({
  selector: 'add-todo',
  inputs: ['completed', 'id'],
  template: templateHtml,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodo {
  todoActions: TodoActions;
  appStore: AppStore;
  constructor(appStore, todoActions) {
    this.appStore = appStore;
    this.todoActions = todoActions;
  }

  addTodo(input) {
    const text = input.value.trim();
    if (text.length !== 0) {
      this.appStore.dispatch(this.todoActions.addTodo(input.value));
      input.value = '';
    }
  }
}

AddTodo.parameters = [AppStore, TodoActions];