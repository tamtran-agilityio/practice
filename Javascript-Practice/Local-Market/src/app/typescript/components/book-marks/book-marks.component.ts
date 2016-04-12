import { Component, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams } from 'angular2/router';

@Component({
	selector: 'book-marks',
	templateUrl: 'app/typescript/components/book-marks/book-marks.component.html',
	providers: [ ],
	directives: [ROUTER_DIRECTIVES]
})
export class BookMarksComponent {

}
