import {Component, OnInit} from 'angular2/core';
// import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';

// import {Select} from '../components/select/select';
import {SELECT_DIRECTIVES} from '../ng2-select';
import {Country} from './select';
// webpack html imports
let templated = require('../select-demo/simple-select.html');

@Component({
  selector: 'simple-select',
  template: templated
  // directives: []

  // directives: [SELECT_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class SingleDemo {
  selectedCountry: Country = new Country(2, 'India');
  countries = [
    new Country(1, 'USA'),
    new Country(2, 'India'),
    new Country(3, 'Australia'),
    new Country(4, 'Brazil')
  ];
  // private value: any = {};
  // private _disabledV: string = '0';
  // private disabled: boolean = false;
  // private items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
  //   'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
  //   'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
  //   'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
  //   'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
  //   'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
  //   'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
  //   'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
  //   'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
  //   'Zagreb', 'Zaragoza', 'Łódź'];
}
