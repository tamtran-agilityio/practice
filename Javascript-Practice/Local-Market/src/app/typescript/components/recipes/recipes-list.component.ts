import { Component, Inject, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router } from 'angular2/router';
import { RecipesService } from '../service/service.component';
import { Recipe } from './recipes';
import { RandDomArray } from './random-array.pipe';
import { RecipesDetailsComponent } from './recipes-details.component';

@Component({
	selector: 'list-recipes',
	templateUrl: 'app/typescript/components/recipes/recipes-list.component.html',
	styleUrls: ['app/typescript/components/recipes/recipes-list.component.css'],
	providers: [ RecipesService, RecipesDetailsComponent ],
	directives: [ ROUTER_DIRECTIVES],
	pipes: [ RandDomArray ]
})

export class RecipesListComponent {
	errorMessage: string;
	@Input() recipes: Recipe[];
	selectedRecipe: Recipe;
	
	constructor( private _recipesService: RecipesService, private _routeParams: RouteParams ) {	}
	onSelect( _recipe: Recipe ) { 
		this.selectedRecipe = _recipe;
		let id = +this._routeParams.get(_recipe);
		this._recipesService.getRecipes(id).subscribe(
			recipes => this.recipes = recipes,
			error => this.errorMessage = <any>error);
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