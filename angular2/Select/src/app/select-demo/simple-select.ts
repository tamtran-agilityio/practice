import {Component, OnInit, EventEmitter} from 'angular2/core';
// import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {NgFor} from 'angular2/common';

// import {Select} from '../components/select/select';
//
import {SELECT_DIRECTIVES} from '../ng2-select';
import {Item} from './select';
import {MovieFilterPipe} from './sort-by';
// webpack html imports
let templated = require('../select-demo/simple-select.html');

@Component({
  selector: 'simple-select',
  template: templated,
  styleUrls: ['app/select-demo/select.css'],
  pipes: [MovieFilterPipe]
})

export class SingleDemo {
  private items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];

  selectedItem: Item;
  isVisible = false;

  onSelect(country: Item) {
    this.selectedItem = country;
  }

  onClick() {
    let isVisible = true;
  }
}
