import {Component, Directive, ElementRef, Input} from 'angular2/core';

@Directive({
	selector: '[myHighlight]',
	host: {
		'(mouseenter)': 'onMouseEnter()',
		'(mouseleave)': 'onMouseLeave()'
	}
})

@Component({
	templateUrl: 'app/highlight.directive.html'
})

export class HighlightDirective {
	/*
	@Input() myHighlight: string;
	*/
	@Input('myHighlight') highlightColor: string;

	private _defaultColor = 'red';
	@Input() set defaultColor(colorName:string){
		this._defaultColor = colorName || this._defaultColor;
	}

	constructor(private el: ElementRef) { }

	onMouseEnter() { this._highlight(this.highlightColor || this._defaultColor); }
	onMouseLeave() { this._highlight(null); }

	private _highlight(color:string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}
