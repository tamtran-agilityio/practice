import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroFormComponent } from './hero-form.component';
import { HighlightDirective } from './highlight.directive';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['Dashboard']">Dashboard</a>
			<a [routerLink]="['Heroes']">Heroes</a>
			<a [routerLink]="['Form']">Heroes Form</a>
			<a [routerLink]="['Directives']">Directive</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		HeroService,
		HeroFormComponent,
		HighlightDirective
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
	{
		path: '/highlight',
		name: 'Directives',
		component: HighlightDirective
	}
])
export class AppComponent {
	title = 'Tour of Heroes';
}
