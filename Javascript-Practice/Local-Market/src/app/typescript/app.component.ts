import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { WhatCooking } from './what-see/what-see.component';
import { RecipesService } from './service/service.component';
import { Recipes } from './recipes/recipes';
import { RecipesList } from './recipes/recipes-list.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/typescript/app.component.html',
  styleUrls: ['app/typescript/app.component.css'],
  directives: [ WhatCooking, RecipesList ],
  providers: [ HTTP_PROVIDERS , RecipesService]
})
export class AppComponent {
	titleNew = 'News';
	news = 'First of the season citrus has just arrived. Get succulent oranges and tangerines in our produce aisle!';
	what = "What's Cooking";
	whatSee = 'See what the community is cooking';
}

