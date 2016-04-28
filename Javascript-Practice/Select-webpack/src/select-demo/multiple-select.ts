import {Component, OnInit, EventEmitter, Input, ElementRef} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Item} from './select';
import {MovieFilterPipe} from './sort-by';

// webpack html imports
let templated = require('./multiple-select.html');

@Component({
  selector: 'multiple-select',
  template: templated,
  pipes: [MovieFilterPipe]
})

export class MultipleDemo {
  openSelect: 'false';
  multipleLevel: boolean = true;
  selectedItems: Array<Item> = new Array<Item>();
  public items: Array<any> = [
    {
      id: 1,
      text: 'England',
      children: [
        { id: 6, text: 'Birmingham' },
        { id: 7, text: 'Bradford' },
        { id: 26, text: 'Leeds' },
        { id: 30, text: 'London' },
        { id: 34, text: 'Manchester' },
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

  constructor(public element: ElementRef) {
  }

  // reset value on input
  private focusToInput(value: string = '') {
    let el = this.element.nativeElement.querySelector('input');
    if (el) {
      el.focus();
      el.value = value;
    }
  }

  // remove item duplicate
  private checkItem(items: Array<any>, value: any) {
    let count = items.length;
    if ( count === 0) {
      this.selectedItems.push(value);
    }
    if ( count >= 1) {
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
  }
}
