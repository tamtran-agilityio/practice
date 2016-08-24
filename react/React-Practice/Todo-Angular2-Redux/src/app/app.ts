//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'root', 
  template: 
    `<div>
      <add-todo></add-todo>
      <todo-list></todo-list>
      <filters></filters>
    </div>`
})
export class App { }