import {Directive, Host, Dependency, Input} from 'angular2/core';

@Directive({
  selector: '[offClick]',
  inputs: ['offClick'],
  host: {
    '(click)': 'onClick($event)',
  }
})

export default class OffClickDirective {
  @Input('offClick') offClickHandler;

  constructor() {
  }

  ngOnInit() {
    let self=this;
    setTimeout(() => {document.addEventListener('click', self.offClickHandler);}, 0);
  }
  
  ngOnDestroy() {
    let self=this;
    document.removeEventListener('click', self.offClickHandler);    
  }

  onClick($event) {
    $event.stopPropagation();
  }
}