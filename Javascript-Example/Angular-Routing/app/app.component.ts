import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroFormComponent } from './hero-form.component';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['Dashboard']">Dashboard</a>
			<a [routerLink]="['Heroes']">Heroes</a>
			<a [routerLink]="['Form']">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		HeroService,
		HeroFormComponent
	]
})
@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	},
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	},
	{
		path: '/heroform',
		name: 'Form',
		component: HeroFormComponent
	},
])
export class AppComponent {
	title = 'Tour of Heroes';
}
