import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { RecipesDetails } from '../recipes/recipes-details.component';

@Component({
	selector: 'what-see',
	templateUrl: 'app/typescript/what-see/what-see.component.html',
	styleUrls: ['app/typescript/what-see/what-see.component.css'],
	directives: [ROUTER_DIRECTIVES, RecipesDetails ]
})

// @RouteConfig([
// 	{
// 		path: '/recipes/recipes-details',
// 		name: 'RecipesDetails',
// 		component: RecipesDetails
// 	}
// ])
export class WhatSee {
	constructor() {
		console.log("first component being called");
	}
}