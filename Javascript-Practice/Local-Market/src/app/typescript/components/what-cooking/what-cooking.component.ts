import { Component, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams } from 'angular2/router';

@Component({
	selector: 'what-cooking',
	templateUrl: 'app/typescript/components/what-cooking/what-cooking.component.html',
	styleUrls: [ 'app/typescript/components/what-cooking/what-cooking.component.css'],
	directives: [ROUTER_DIRECTIVES]
})
export class WhatCookingComponent {

}