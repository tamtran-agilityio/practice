import { Component, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router } from 'angular2/router';
import { WhatCookingComponent } from '../../components/what-cooking/what-cooking.component';
import { RecipesListComponent } from '../../components/recipes/recipes-list.component';
import { ScrollDirective } from './local-market.directive';
import { MenuScrollIntegration } from './menu-scroll.integration';

@Component({
	selector: 'local-market',
	templateUrl: 'app/typescript/components/market/local-market.component.html',
	styleUrls: ['app/typescript/components/market/local-market.component.css'],
	providers: [ HTTP_PROVIDERS ],
	directives: [ROUTER_DIRECTIVES, WhatCookingComponent, RecipesListComponent, ScrollDirective]
})
export class LocalMarKetComponent {
}
