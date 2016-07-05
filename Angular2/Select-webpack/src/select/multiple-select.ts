import {Component, OnInit, EventEmitter, Input, Output, ElementRef, Renderer} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router } from 'angular2/router';
import { HTTP_PROVIDERS, Http } from 'angular2/http';
import {NgFor} from 'angular2/common';
import {Item} from './select';
import {MovieFilterPipe} from './sort-by';
import {ItemService} from '../service/service';
// webpack html imports
let templated = require('./multiple-select.html');

@Component({
  selector: 'multiple-select',
  template: templated,
  providers: [ItemService, RouteParams, HTTP_PROVIDERS],
  styleUrls: ['/src/select/select.css'],
  pipes: [MovieFilterPipe]
})

export class MultipleDemo {
  private item: Item;
  private openSelect: 'false';
  private filterValue: string;
  private errorMessage: any;
  private activeVisible = 'open';
  private _items: Array<any> = [];

  public selectedItems: Array<Item> = new Array<Item>();
  public active: Array<Item> = [];
  public children: Array<Item>;
  @Input() public multipleLevel: boolean = true;
  @Input() public multipleChangle: boolean = false;
  @Input() public queryAPI: boolean = false;
  @Input() public url: string;
  @Input() public title: string;
  @Input() public childField: string;
  @Input() public set items(value: Array<any>) {

    if (value === null || value === undefined) {
      return;
    }

    this._items = value;
  }

  @Output() public data: EventEmitter<any> = new EventEmitter();

  constructor(private _renderer: Renderer, private element: ElementRef, private _itemService: ItemService, private _params: RouteParams) {
  }


  // reset value on input
  focusToInput(value: string = '') {
    let el = this.element.nativeElement.querySelector('input');
    if (el) {
      el.focus();
      el.value = value;
    }
  }

  // remove item duplicate
  checkItem(items: Array<any>, value: any) {
    let count = items.length;
    if ( count === 0) {
      this.selectedItems.push(value);
    }

    if (this.multipleChangle && count >= 1) {
      return;
    }

    if (count >= 1 && !this.multipleChangle) {
      for (let i = 0; i < count; i++) {
      let item = items[i][this.childField];
      if (item === value[this.childField]) {
          let j = items.indexOf(value);
          if (j != -1) {
            items.splice(j, 1);
            return;
          }
        }
      }
    this.selectedItems.push(value);
    }
  }

  // on select item of list
  onSelect(item: Item) {
    this.checkItem( this.selectedItems, item);
    this.focusToInput();
    this.activeVisible = 'close';
  }

  onKey() {
    this.activeVisible = 'open';
  }

  removeItem(index: number) {
    if (this.selectedItems.length > 0) {
      this.selectedItems.splice(index, 1);
    }
  }
}
