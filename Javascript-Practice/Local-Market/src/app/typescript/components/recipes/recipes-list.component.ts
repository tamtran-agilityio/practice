import { Component, Inject, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router } from 'angular2/router';
import { RecipesService } from '../../service/service.component';
import { Recipe } from './recipes';
import { RandDomArray } from './random-array.pipe';
import { RecipesDetailsComponent } from './recipes-details.component';
import { LocalMarKetComponent } from '../../components/market/local-market.component';

@Component({
  selector: 'list-recipes',
  templateUrl: 'app/typescript/components/recipes/recipes-list.component.html',
  styleUrls: ['app/typescript/components/recipes/recipes-list.component.css'],
  providers: [ RecipesService, RecipesDetailsComponent ],
  directives: [ ROUTER_DIRECTIVES],
  pipes: [ RandDomArray ]
})

@RouteConfig([
  {
    path: '/',
    name: 'LocalMarKet',
    component: LocalMarKetComponent,
    useAsDefault: true
  },
  {
    path: '/recipes-details/:id',
    name: 'RecipesDetails',
    component: RecipesDetailsComponent
  }
])
export class RecipesListComponent {
  errorMessage: string;
  @Input() recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor( private _recipesService: RecipesService ) {
  }

  onSelect( _recipe: Recipe ) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this._recipesService.getRecipes().subscribe(
      recipes => this.recipes = recipes,
      error => this.errorMessage = <any>error);
  }
}
