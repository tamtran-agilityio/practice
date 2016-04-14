import { Component, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams } from 'angular2/router';
import { Recipe } from '../recipes/recipes';
import { RecipesService } from '../../service/service.component';
import { RecipesDetailsComponent } from '../recipes/recipes-details.component';

@Component({
	selector: 'book-marks',
	templateUrl: 'app/typescript/components/book-marks/book-marks.component.html',
	styleUrls: ['app/typescript/components/book-marks/book-marks.component.css'],
  providers: [ RecipesService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class BookMarksComponent {
  constructor(private _recipesService: RecipesService) { }
  errorMessage: string;
  @Input() recipes: Recipe[];

  selectedRecipe: Recipe;

  onSelect(recipe: Recipe) {
  }

  ngOnInit() {
    this.getRecipesBookMark();
  }

  getRecipesBookMark() {
    this._recipesService.getRecipeBookMark().subscribe(
      recipes =>
        {
          this.recipes = recipes;
        },
      error => this.errorMessage = <any>error);
  }
}
