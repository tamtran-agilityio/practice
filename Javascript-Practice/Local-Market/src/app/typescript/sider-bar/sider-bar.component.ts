import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
// import { HomeComponent } from './hero-detail.component';
// import { WhatCookingComponent } from './dashboard.component';
// import { RecipesComponent } from './hero.service';
// import { BooksMarkComponent } from './hero.service';
// import { AboutComponent } from './hero.service';

@Component({
	selector:'menu'
	// ,
	// templateUrl: 'app/typescript/sider-bar.component.html',
	// styleUrls: ['app/typescript/sider-bar.component.css'],
	// directives: [ROUTER_DIRECTIVES],
	// providers: [HomeComponent, WhatCookingComponent, RecipesComponent, BooksMarkComponent, AboutComponent]
})
@RouteConfig([
  // {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
  // {path: '/whatcooking', name: 'WhatCooking', component: WhatCookingComponent},
  // {path: '/recipes', name: 'Recipes', component: RecipesComponent},
  // {path: '/booksmark', name: 'BooksMark', component: BooksMarkComponent},
  // {path: '/about', name: 'About', component: AboutComponent}
])
export class SiderBar {

}
