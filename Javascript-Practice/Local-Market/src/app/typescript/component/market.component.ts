import { Component, Input, OnInit } from 'angular2/core';
import { RecipesService } from '../service/service.component';
import { Recipe } from '../recipes/recipes';
import { RandDomArray } from './random-array.pipe';

@Component({
	selector: 'local-app',
	templateUrl: 'app/typescript/component/market.component.html',
	styleUrls: ['app/typescript/component/market.component.css'],
	providers: [ RecipesService],
	pipes: [ RandDomArray ]
})

export class LocalMarKet implements OnInit {
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
