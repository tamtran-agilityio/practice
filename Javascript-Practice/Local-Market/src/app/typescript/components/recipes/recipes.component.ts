import { Component, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams } from 'angular2/router';
import { RecipesService } from '../service/service.component';
import { Recipe } from './recipes';
import { ConvertObjectToArrayPipe } from './convert-object-to-array.pipe';
import { RecipesDetailsComponent } from './recipes-details.component';

@Component({
	selector: 'recipes',
	templateUrl: 'app/typescript/components/recipes/recipes.component.html',
	styleUrls: ['app/typescript/components/recipes/recipes.component.css'],
	providers: [ RecipesService ],
	directives: [ ROUTER_DIRECTIVES, RecipesDetailsComponent ],
	pipes: [ConvertObjectToArrayPipe]
})

export class RecipesComponent implements OnInit {
	constructor(private _recipesService: RecipesService) { }
	errorMessage: string;
	recipes: Recipe[];

	selectedRecipe: Recipe;

	onSelect(recipe: Recipe) { 
		this.selectedRecipe = recipe;
		console.debug("recipe",recipe)
	}

	ngOnInit() {
		this.getRecipes();
	}

	getRecipes() {
		this._recipesService.getRecipes().subscribe(
			recipes => this.recipes = recipes,
			error => this.errorMessage = <any>error);
	}
}
