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
      [items]="items | async"
      [multipleLevel]="false"
      [multipleChangle]="true"
      title="name"
      childField="name"
    >
    </multiple-select>
  `,
  // [items]="items | async"
  styleUrls: ['/src/select-demo/select.css'],
  providers: [ItemService, Item, RouteParams, HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES, MultipleDemo]
})
export class AppComponent implements OnInit {

  private name: string = 'hello';
  errorMessage: any;
  public items: any;
  constructor(private _itemService: ItemService, private _params: RouteParams) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items = this._itemService.getItem('http://api.hungama.com/metroapp/categories.php?format=json')
    .map(items => items.category);
  }

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
}
