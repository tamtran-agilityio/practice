import { Component, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router } from 'angular2/router';
import { RecipesService } from '../service/service.component';
import { Recipe } from './recipes';

@Component({
	selector: 'recipe-detail',
	templateUrl: 'app/typescript/components/recipes/recipes-details.component.html',
	styleUrls: ['app/typescript/components/recipes/recipes-details.component.css'],
	providers: [ RecipesService ],
})

export class RecipesDetailsComponent {
	@Input()
	recipe: Recipe;

	selectedRecipe: Recipe;
	constructor(
		private _router: Router,
		private _recipesService: RecipesService) {
	}
	onSelect(recipe: Recipe) { 
		this.selectedRecipe = recipe;
		console.debug("recipeAAAA", recipe)
	}
}
