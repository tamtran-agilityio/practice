import { Component, OnInit, Pipe, PipeTransform } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RecipesService } from '../service/service.component';
import { Recipe } from './recipes';

@Component({
	selector: 'recipes-details',
	templateUrl: 'app/typescript/recipes/recipes-details.component.html',
	styleUrls: ['app/typescript/recipes/recipes-details.component.css'],
	directives: [ ],
	providers: [ HTTP_PROVIDERS , RecipesService],
	pipes: []
})


export class RecipesDetails implements OnInit {
	constructor(private _recipesService: RecipesService ) {
		console.log("first component being called");
	}
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
