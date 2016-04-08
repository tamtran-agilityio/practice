import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RecipesService } from '../service/service.component';
import { Recipes } from './recipes';

@Component({
	selector: 'item-recipes',
	templateUrl: 'app/typescript/recipes/recipes-list.component.html',
	styleUrls: ['app/typescript/recipes/recipes-list.component.css'],
	directives: [ ],
	providers: [ HTTP_PROVIDERS , RecipesService]
})

export class RecipesList implements OnInit {
	constructor(private _recipesService: RecipesService ) {}
	errorMessage: string;
	recipes: Recipes[];
	ngOnInit() {
		this.getRecipes();
	}

	getRecipes() {
		this._recipesService.getRecipes().subscribe(
			recipes => this.recipes = recipes,
			error =>  this.errorMessage = <any>error);
	}
}