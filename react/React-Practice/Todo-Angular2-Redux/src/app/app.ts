import {Component} from '@angular/core'

@Component({
  selector: 'todo-app', 
  template: 
    `<div class='todoapp'>
      <add-todo class='header-container'></add-todo>
      <todo-list class='main'></todo-list>
      <filters class='filters'></filters>
    </div>`
})

export class App { }