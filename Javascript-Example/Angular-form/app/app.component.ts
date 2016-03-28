import {Component}         from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import { HeroFormComponent } from './hero-form.component';
import { RadioControlValueAccessor } from "./radio_value_accessor.component";

@Component({
	selector: 'my-app',
  	templateUrl: 'app/app.component.html',
	directives: [HeroFormComponent, FORM_DIRECTIVES, RadioControlValueAccessor]
})
export class AppComponent {
	model;
	constructor() {
		this.model = {
			sex: "female"
		};
	}
}