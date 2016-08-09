import {Component, OnInit, EventEmitter, Input, ElementRef} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {SELECT_DIRECTIVES} from '../ng2-select';
import {Item} from './select';
import {MovieFilterPipe} from './sort-by';
import {HighlightPipe} from '../components/select/select-pipes';
import {ConvertObjectToArrayPipe} from './convert-object-to-array';

// webpack html imports
let templated = require('../select-demo/multiple-select.html');

@Component({
  selector: 'multiple-select',
  template: templated,
  styleUrls: ['app/select-demo/select.css'],
  pipes: [MovieFilterPipe, HighlightPipe, ConvertObjectToArrayPipe]
})

export class MultipleDemo {
  openSelect: 'false';
  multipleLevel: boolean = true;
  selectedItems: Array<Item> = new Array<Item>();
  private items: Array<any> = [
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
    console.log(" items.length", items.length);;
    let count = items.length;
    if ( count === 0) {
      this.selectedItems.push(value);
    }
    if ( count >= 1) {
    console.log("DSSSSSS", value);
      for (let i = 0; i <= count; i++) {
      if (value === items[i].text) {
        console.log("Item", items[i].text);
        console.log("value", value);
          let j = items.indexOf(value);
          if (j != -1) {
            items.splice(j, 1);
          }
        } else {
          this.selectedItems.push(value);
        }
      }
    }
  }

  // on select item of list
  onSelect(item: Item) {
    this.checkItem( this.selectedItems, item);
    this.focusToInput();
  }
}
