import {Component, ElementRef, Inject, OnInit} from 'angular2/core';
// import * as jQuery from 'jquery';
// declare var jQuery:any;


@Component({
  selector: 'jquery-integration',
  templateUrl: 'app/typescript/components/market/local-market.component.html'
})

export class JqueryIntegration implements OnInit {
  elementRef: ElementRef;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
    // console.debug("Jquery", jQuery);
  }

  ngOnInit() {
    // jQuery(this.elementRef.nativeElement).find('black').draggable({containment:'#draggable-parent'});
  }
}
