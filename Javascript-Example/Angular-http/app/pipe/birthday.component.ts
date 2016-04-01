import {Component} from 'angular2/core'

@Component({
  selector: 'hero-birthday',
  template: `<p>The hero's birthday is {{ birthday | date }}</p>`
})
export class HeroBirthday {
  birthday = new Date(1989,9,23);
}