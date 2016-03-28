import { Component } from 'angular2/core';
import {Directive, Renderer, ElementRef, Self, forwardRef, Provider} from 'angular2/core';

import {NG_VALUE_ACCESSOR, ControlValueAccessor} from 'angular2/common';
import {CONST_EXPR} from 'angular2/src/facade/lang';

const RADIO_VALUE_ACCESSOR = CONST_EXPR(new Provider(
	NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => RadioControlValueAccessor), multi: true}));

@Component({
	seletor: 'little-radio',
	template: `
		<div>
			<form action="">
				<input type="radio" [(ngModel)]="model.sex"  name="sex" value="1">One<br>
				<input type="radio" [(ngModel)]="model.sex"  name="sex" value="2">True<br>
				<input type="radio" [(ngModel)]="model.sex"  name="sex" value="3">Three
			</form>

			<input type="button" value="select one" (click)="model.sex='one'">
			<input type="button" value="select two" (click)="model.sex='two'">
			 <input type="button" value="select three" (click)="model.sex='three'">
			<div>Selected Radio: {{model.sex}}</div>
		</div>
	`
	// templateUrl: "app/radio.component.html",

})

@Directive({
	selector:
		'input[type=radio][ngControl],input[type=radio][ngFormControl],input[type=radio][ngModel]',
	host: {'(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()'},
	bindings: [RADIO_VALUE_ACCESSOR]
})
export class RadioControlValueAccessor implements ControlValueAccessor {
	onChange = (_) => {};
	onTouched = () => {};

	constructor(private _renderer: Renderer, private _elementRef: ElementRef) {}

	writeValue(value: any): void {
		this._renderer.setElementProperty(this._elementRef, 'checked', value == this._elementRef.nativeElement.value);
	}
	registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
	registerOnTouched(fn: () => {}): void { this.onTouched = fn; }
}