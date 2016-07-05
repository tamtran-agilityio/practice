import { Component, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams } from 'angular2/router';

@Component({
	selector: 'about',
	templateUrl: 'app/typescript/components/about/about.component.html',
	providers: [ ],
	directives: [ROUTER_DIRECTIVES]
})
export class AboutComponent {

}