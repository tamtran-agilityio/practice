interface JQuery {
    chosen(options?:any):JQuery;
}

declare module "jquery" {
    export = JQuery;
}
declare var jQuery: JQueryStatic;

import {bootstrap}    from 'angular2/platform/browser';
import {Component, ElementRef, AfterViewInit} from 'angular2/core';

declare var jQuery:JQueryStatic;

@Component({
    selector: 'ng-chosen',
    template:`<select>
        <option *ngFor="#item of items" [value]="item" [selected]="item == selectedValue">{{item}} option</option>
        </select>
        <h4> {{selectedValue}}</h4>`})
export class NgChosenComponent implements AfterViewInit {
    static chosenInitialized = false;
    items = ['First', 'Second', 'Third'];
    selectedValue = 'Second';

    constructor(private el:ElementRef) {
    }

    ngAfterViewInit() {
        if(!NgChosenComponent.chosenInitialized) {
            jQuery(this.el.nativeElement)
                .find('select')
                .chosen()
                .on('change', (e, args) => {
                    this.selectedValue = args.selected;
            });
            NgChosenComponent.chosenInitialized = true;
        }
    }
}
