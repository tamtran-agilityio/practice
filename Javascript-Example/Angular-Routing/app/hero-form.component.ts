import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { FORM_DIRECTIVES } from 'angular2/common';
import { Hero } from './hero.form';

@Component({
	selector: 'hero-form',
	template: 'app/hero-form.component.html',
	directives: [FORM_DIRECTIVES]
})

export class HeroFormComponent {
	powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
	model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
	submitted = false;
	onSubmit() {
		this.submitted = true;
	}

  get diagnostic() {
  	return JSON.stringify(this.model);
  }
}
