import {Component, OnInit, EventEmitter, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {SELECT_DIRECTIVES} from '../ng2-select';
import {Country} from './select';
import {MovieFilterPipe} from './sort-by';

// webpack html imports
let templated = require('../select-demo/multiple-select.html');

@Component({
  selector: 'multiple-select',
  template: templated,
  styleUrls: ['app/select-demo/select.css'],
  pipes: [MovieFilterPipe]
})

export class MultipleDemo {
  private countries: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];
  visible: 'false';
  selectedItem: Country;
  lists: Array<Country>;
  constructor() {
    this.lists = [];
  }
  onSelect(country: Country) {
    this.selectedItem = country;
    this.lists.push(country);
  }
}
