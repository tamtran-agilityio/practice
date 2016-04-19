import { Component, Input, OnInit, Inject, AfterViewChecked, ElementRef, ViewChild } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router } from 'angular2/router';
import { WhatCookingComponent } from '../../components/what-cooking/what-cooking.component';
import { RecipesListComponent } from '../../components/recipes/recipes-list.component';
import { ScrollDirective } from './local-market.directive';
import { JqueryIntegration } from './menu-scroll.integration';
import jQuery from 'jquery';

@Component({
	selector: 'local-market',
	templateUrl: 'app/typescript/components/market/local-market.component.html',
	styleUrls: ['app/typescript/components/market/local-market.component.css'],
	providers: [ HTTP_PROVIDERS ],
	directives: [ROUTER_DIRECTIVES, WhatCookingComponent, RecipesListComponent, ScrollDirective, JqueryIntegration]
})
export class LocalMarKetComponent implements OnInit, AfterViewChecked {
  elementRef: ElementRef;
  isClassVisibles = false;
  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
    console.debug("Jquery", jQuery);
  }

  ngOnInit() {

    let contentScroll = jQuery(this.elementRef.nativeElement).find('.content-scrollable');

    contentScroll.on('scroll', (e) => {
      let contentTop = contentScroll.scrollTop();
      let contentShow = contentScroll.offset().top;
      let imageHeight = jQuery(this.elementRef.nativeElement).find('.bg-image').height();
      console.log("imageHeight", imageHeight);
      console.debug("contentTop", contentTop);
      if (contentTop > imageHeight) {
        jQuery(this.elementRef.nativeElement).find('.black').addClass('scrolled');
        jQuery(this.elementRef.nativeElement).find('.fa-align-left').addClass('scrolled');
      } else {
        jQuery(this.elementRef.nativeElement).find('.black').removeClass('scrolled');
        jQuery(this.elementRef.nativeElement).find('.fa-align-left').removeClass('scrolled');
      }
    });

  }

  public ngAfterViewChecked() {
  }
}
