import {Component, OnInit, EventEmitter, Input, Output, ElementRef, Renderer} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Item} from './select';
import {MovieFilterPipe} from './sort-by';

// webpack html imports
let templated = require('./multiple-select.html');

@Component({
  selector: 'multiple-select',
  template: templated,
  styles: [`
    .hidden {
      display: none;
    }
    .dropdown-menu {
      position: absolute;
      left: 0;
      z-index: 10;
      top: 60px;
      display: none;
      margin: 0 10px;
      float: left;
      width: 100%;
      min-width: 160px;
      padding: 5px 0;
      margin: 2px 0 0;
      font-size: 14px;
      text-align: left;
      list-style: none;
      background-color: #fff;
      -webkit-background-clip: padding-box;
      background-clip: padding-box;
      border: 1px solid #ccc;
      border: 1px solid rgba(0,0,0,.15);
      border-radius: 4px;
      -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
      box-shadow: 0 6px 12px rgba(0,0,0,.175);
      height: auto;
      max-height: 200px;
      overflow-x: hidden;
      margin-top: -1px;
    }
    .ui-select-match-item {
      outline: 0;
      position: relative;
      padding: 1px 5px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
      display: inline-block;
      float: left;
      z-index: 20;
    }
    .ui-select-bootstrap {
      position: relative;
      display: block;
      float: left;
      top: -60px;
      width: auto;
      height: 34px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      outline: none;
      background-color: transparent;
      background-image: none;
      border: none;
    }
    .ui-select-content {
      position: relative;
      min-height: 40px;
      border: 1px solid #ccc;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
      -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
    .close-item {
      width: 10px;
      height: 10px;
      position: relative;
      top: 1px;
      display: inline-block;
      font-family: 'Glyphicons Halflings';
      font-style: normal;
      font-weight: 400;
      z-index: 100000000000000;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #555;
      background-color: #000;
    }
    .select-open {
      display: block;
    }
  `],
  pipes: [MovieFilterPipe]
})

export class MultipleDemo {
  item: Item;
  openSelect: 'false';
  filterValue: string;
  acticeVisible = 'close';
  selectedItems: Array<Item> = new Array<Item>();

  private _items: Array<any> = [];
  public itemObjects: Array<Item> = [];
  public active: Array<Item> = [];
  public children: Array<Item>;
  @Output() public data: EventEmitter<any> = new EventEmitter();
  @Input() multipleLevel: boolean = true;
  @Input() public initData: Array<any> = [];
  @Input() public multiple: boolean = false;
  @Input() public items(value: Array<any>) {
    this._items = value;
    this.itemObjects = this._items.map((item: any) => new Item(item));
  }

  constructor(private _renderer: Renderer, private element: ElementRef) {
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

    if (this.multiple && count >= 1) {
      console.log("multiple true", this.multiple);
      return;
    }

    console.log("multiple", this.multiple);
    if (count >= 1 && !this.multiple) {
      for (let i = 0; i < count; i++) {
        let item = items[i].text;
        if (item === value.text) {
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
    this.acticeVisible = 'close';
  }

  onKey() {
    this.acticeVisible = 'open';
  }
  removeItem(index: number) {
    if (this.selectedItems.length > 0) {
      this.selectedItems.splice(index, 1);
    }
  }
}
