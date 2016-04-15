import {Component, ElementRef, AfterViewInit} from 'angular2/core';

declare var jQuery:JQueryStatic;

@Component({
  selector: 'chosen',
  templateUrl: 'app/typescript/components/market/local-market.component.html'
export class MenuScrollIntegration implements AfterViewInit {
  static chosenInitialized = false;

  constructor(private el:ElementRef) {
    console.debug("DDDDDDDDDDDDDDDDDDDDDD");
  }

  ngAfterViewInit() {
      if(!this.chosenInitialized) {
        console.debug("DDDDDDDDDDDDDDDDDDDDDD");
          // jQuery(this.el.nativeElement)
          //     .find('.title-page')
          // });
          this.chosenInitialized = true;
      }
  }
}

// import {Component, ElementRef, Inject, OnInit} from 'angular2/core';

// declare let jQuery:any;

// @Component({
//   selector: 'jquery-integration',
//   templateUrl: 'app/typescript/components/market/local-market.component.html'
// })

// export class MenuScrollIntegration implements OnInit {
//   elementRef: ElementRef;

//   constructor(elementRef: ElementRef) {
//     this.elementRef = elementRef;
//   }
//   ngOnInit() {
//     jQuery(this.elementRef.nativeElement).find('.title-page').draggable({containment:'#draggable-parent'});
//     console.debug("SSSSSS");
//   }
  // constructor(@Inject(ElementRef) elementRef: ElementRef) {
  //   this.elementRef = elementRef;
  //   console.debug("SSSSSS");
  // }

  // ngOnInit() {
  //   jQuery(this.elementRef.nativeElement).find('.title-page').draggable({containment:'#draggable-parent'});
  //   console.debug("SSSSSS");
  //   // this.getScroll();
  // }

  // getScroll() {
  //   console.debug("DDDDDDDDDDDDDDDD");
  // }
}
