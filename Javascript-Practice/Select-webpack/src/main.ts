import {Component, Inject, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES } from 'angular2/common';
import {RouteParams} from 'angular2/router';
import { HTTP_PROVIDERS, Http } from 'angular2/http';
import {MultipleDemo} from './select/multiple-select';
import {Item} from './select/select';
import {ItemService} from './service/service';

interface TestObject {
  name: string;
  value: number;
}

@Component({
  selector: 'app',
  template: `
    <multiple-select
      [initData]="itemss"
      [multipleLevel]="false"
      [multiple]="false"
      [url]="'data.json'"
      [queryAPI]="false"
    >
    </multiple-select>
  `,
  styleUrls: ['/src/select-demo/select.css'],
  providers: [ItemService, Item, RouteParams, HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES, MultipleDemo],
})
export class AppComponent {
  private name: string = 'hello';

  public itemss: Array<any> = [
    {
      id: 1,
      text: 'England',
      children: [
        { id: 6, text: 'Birmingham' },
        { id: 7, text: 'Bradford' },
        { id: 26, text: 'Leeds' },
        { id: 30, text: 'London' },
        { id: 34, text: 'Manchester' },
        { id: 35, text: 'Manchester City' },
        { id: 47, text: 'Sheffield' }
      ]
    },
    {
      id: 2,
      text: 'Finland',
      children: [
        { id: 25, text: 'Helsinki' }
      ]
    },
    {
      id: 3,
      text: 'France',
      children: [
        { id: 35, text: 'Marseille' },
        { id: 40, text: 'Paris' }
      ]
    },
    {
      id: 4,
      text: 'Germany',
      children: [
        { id: 5, text: 'Berlin' },
        { id: 8, text: 'Bremen' },
        { id: 12, text: 'Cologne' },
        { id: 14, text: 'Dortmund' },
        { id: 15, text: 'Dresden' },
        { id: 17, text: 'Düsseldorf' },
        { id: 18, text: 'Essen' },
        { id: 19, text: 'Frankfurt' },
        { id: 23, text: 'Hamburg' },
        { id: 24, text: 'Hannover' },
        { id: 27, text: 'Leipzig' },
        { id: 37, text: 'Munich' },
        { id: 50, text: 'Stuttgart' }
      ]
    }
  ];
  // public items: Array<any> = [
  //   {
  //     children: [
  //       { text: 'Berlin' },
  //       { text: 'Bremen' },
  //       { text: 'Cologne' },
  //       { text: 'Dortmund' },
  //       { text: 'Dresden' },
  //       { text: 'Düsseldorf' },
  //       { text: 'Essen' },
  //       { text: 'Frankfurt' },
  //       { text: 'Hamburg' },
  //       { text: 'Hannover' },
  //       { text: 'Leipzig' },
  //       { text: 'Munich' },
  //       { text: 'Stuttgart' }
  //     ]
  //   }
  // ]
}
