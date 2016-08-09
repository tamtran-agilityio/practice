import {Component, View} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {NgForm}    from 'angular2/common';
import { Hero }    from './hero';
import {FORM_DIRECTIVES} from "angular2/common";
import {RadioControlValueAccessor} from "./radio_value_accessor";
import {bootstrap} from "angular2/platform/browser";

@Component({
	templateUrl: 'app/hero-form.component.html',
	selector: 'hero-form'
})

// @View({
// 	directives:[FORM_DIRECTIVES]
// })
export class HeroFormComponent {

	model;

	constructor() {
		this.model = {
			sex: "female"
		};
	}
	powers = ['Really Smart', 'Super Flexible',
						'Super Hot', 'Weather Changer'];
	model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
	submitted = false;
	checkboxes = [{label: 'one'},{label: 'two'}];

	onSubmit() {
		this.submitted = true;
		// return !this.checkboxes.some(_ => _.state);
	}
	active = true;
	newHero() {
		this.model = new Hero(42, '', '');
		this.active = false;
		setTimeout(()=> this.active=true, 0);
	}
}

