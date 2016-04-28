import {Component, Inject} from 'angular2/core';
import {FORM_DIRECTIVES } from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {MultipleDemo} from './select-demo/multiple-select';
interface TestObject {
  name: string;
  value: number;
}

@Component({
  selector: 'app',
  template: `
    <multiple-select></multiple-select>
  `,
  directives: [FORM_DIRECTIVES, MultipleDemo],
})
export class AppComponent {
  private name: string = 'hello';

}
