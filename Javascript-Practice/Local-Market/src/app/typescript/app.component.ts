import { Component, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams } from 'angular2/router';
import { WhatSee } from './what-see/what-see.component';
import { RecipesService } from './service/service.component';
import { Recipe } from './recipes/recipes';
import { LocalMarKet } from './component/market.component';
import { RecipesDetails } from './recipes/recipes-details.component';
import { ConvertObjectToArrayPipe } from './recipes/convert-object-to-array.pipe';

@Component({
	selector: 'my-app',
	template: `
		<nav>
			<a [routerLink]="['LocalMarKet']">LocalMarKet</a>
			<a [routerLink]="['RecipesDetails']">RecipesDetails</a>
			<a [routerLink]="['WhatSee']">WhatSee</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	directives: [ ROUTER_DIRECTIVES ],
	providers: [ HTTP_PROVIDERS, RecipesService],
	pipes: [ ConvertObjectToArrayPipe ]
})
@RouteConfig([
	{
		path: '/market',
		name: 'LocalMarKet',
		component: LocalMarKet,
		useAsDefault: true
	},
	{
		path: '/recipes-details',
		name: 'RecipesDetails',
		component: RecipesDetails
	},
	{
		path: '/what-see',
		name: 'WhatSee',
		component: WhatSee
	}
])
export class AppComponent implements OnInit {
	titleNew = 'News';
	news = 'First of the season citrus has just arrived. Get succulent oranges and tangerines in our produce aisle!';
	what = "What's Cooking";
	whatSee = 'See what the community is cooking';
	constructor(private _recipesService: RecipesService) {}
	errorMessage: string;
	recipes: Recipe[];
	ngOnInit() {
		this.getRecipes();
	}

	getRecipes() {
		this._recipesService.getRecipes().subscribe(
			recipes => this.recipes = recipes,
			error =>  this.errorMessage = <any>error);
	}
}

