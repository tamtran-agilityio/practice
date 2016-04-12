import { Component, Inject, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router } from 'angular2/router';
import { Recipe } from './components/recipes/recipes';
import { LocalMarKetComponent } from './components/market/local-market.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { BookMarksComponent } from './components/book-marks/book-marks.component';
import { AboutComponent } from './components/about/about.component';
import { WhatCookingComponent } from './components/what-cooking/what-cooking.component';
import { RecipesDetailsComponent } from './components/recipes/recipes-details.component';

@Component({
	selector: 'my-app',
	template: `
		<section id="menu">
			<a [routerLink]="['LocalMarKet']">
				<span class="wrapper-menu-item">
					<span class="icon-home"></span>
					<span class="title"> Home </span>
				</span>
			</a>
			<a [routerLink]="['WhatCooking']">
				<span class="wrapper-menu-item">
					<span class="icon-rss"></span>
					<span class="title"> What's Cooking </span>
				</span>
			</a>
			<a [routerLink]="['Recipes']">
				<span class="wrapper-menu-item">
					<span class="icon-category"></span>
					<span class="title"> Recipes </span>
				</span>
			</a>
			<a [routerLink]="['BookMarks']">
				<span class="wrapper-menu-item">
					<span class="icon-bookmark-hollow"></span>
					<span class="title"> BookMarks </span>
				</span>
			</a>
			<a [routerLink]="['About']">
				<span class="wrapper-menu-item">
					<span class="icon-question"></span>
					<span class="title"> About </span>
				</span>
			</a>
		</section>
		<router-outlet></router-outlet>
	`,
	directives: [ ROUTER_DIRECTIVES],
	providers: [ HTTP_PROVIDERS ]
})
@RouteConfig([
	{
		path: '/',
		name: 'LocalMarKet',
		component: LocalMarKetComponent,
		useAsDefault: true
	},
	{
		path: '/what-cooking',
		name: 'WhatCooking',
		component: WhatCookingComponent
	},
	{
		path: '/recipes',
		name: 'Recipes',
		component: RecipesComponent
	},
	{
		path: '/book-marks',
		name: 'BookMarks',
		component: BookMarksComponent
	},
	{
		path: '/about',
		name: 'About',
		component: AboutComponent
	},
	{
		path: '/recipes-details/:id',
		name: 'RecipesDetails',
		component: RecipesDetailsComponent
	}
])
export class AppComponent {
	@Input()
	recipe: Recipe;
	selectedRecipe: Recipe;
	onSelect(recipe: Recipe) { 
		this.selectedRecipe = recipe;
		console.log("recipeAAAA", recipe);
	}
}

