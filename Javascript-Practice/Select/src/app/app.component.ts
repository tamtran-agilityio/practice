import {Component, Inject} from 'angular2/core';
import {FORM_DIRECTIVES } from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {SingleDemo} from './select-demo/simple-select';
import {MultipleDemo} from './select-demo/multiple-select';
interface TestObject {
  name: string;
  value: number;
}

@Component({
  selector: 'app',
  templateUrl: './app/demo.html',
  directives: [FORM_DIRECTIVES, MultipleDemo],
})
export class AppComponent {

}
