import {Component} from 'angular2/core';
import {FetchJsonPipe} from './fetch-json.pipe';

@Component({
  selector: 'hero-lists',
  template: `
    <h2>Heroes from JSON File</h2>

    <div *ngFor="#hero of ('app/pipe/heroes.json' | fetch)  ">
      {{hero.name}}
    </div>

    <p>Heroes as JSON:
    {{'app/pipe/heroes.json' | fetch | json}}
    </p>
  `,
  pipes: [FetchJsonPipe]
})
export class HeroListComponents { }