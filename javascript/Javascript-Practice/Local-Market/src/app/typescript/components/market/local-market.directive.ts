import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
  selector: '[myHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class ScrollDirective {

  private _defaultScroll = 'auto';
  private _element:HTMLElement;
  /*
  @Input() myHighlight: string;
  */

  @Input() set defaultColor(scrollName:string){
    this._defaultScroll = scrollName || this._defaultScroll;
  }

  @Input('myHighlight') scrollActive: string;

  constructor(el: ElementRef) {
    this._element = el.nativeElement;
  }

  onMouseEnter() { this._srcoll(this.scrollActive || this._defaultScroll); }
  onMouseLeave() { this._srcoll(null); }

  private _srcoll(active:string) {
    this._element.style.overflow = active;
  }
}
