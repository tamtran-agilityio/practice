import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AddTodo} from './component/add-todo';
import {TodoList} from './component/todo-list';
import {Filters} from './component/filters';
import {AppStore} from './reducer/appStore';
import {TodoActions} from './actions/action';

@Component({
  selector: 'todo-app',
  template: 
    `<div class="todoapp">
      <add-todo></add-todo>
      <todo-list></todo-list>
      <filters></filters>
    </div>`,
  directives: [AddTodo, TodoList, Filters],
  providers: [TodoActions, AppStore]
})

export class App {
  constructor() {
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})

export class AppModule {}