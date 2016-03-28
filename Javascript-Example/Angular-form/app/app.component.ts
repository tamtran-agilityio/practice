import {Component}         from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import { HeroFormComponent } from './hero-form.component';
import { DemoFormSkuBuilder }			from './form-sku.component';

@Component({
  selector: 'my-app',
  template: '<hero-form></hero-form>',
  directives: [HeroFormComponent, FORM_DIRECTIVES, DemoFormSkuBuilder]
})
export class AppComponent {
}