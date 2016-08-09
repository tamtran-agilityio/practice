import { Component } from 'angular2/core';

@Component({
	selector: 'hero-birthday2',
	template: `
		<p>The hero's birthday is {{ birthday | date:format }}</p>
    	<button (click)="toggleFormat()">Toggle Format</button>
	`
})

export class HappyChange {
  birthday = new Date(1989, 9, 23); 
  toggle = true;

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'}
  toggleFormat() { this.toggle = !this.toggle; }
}