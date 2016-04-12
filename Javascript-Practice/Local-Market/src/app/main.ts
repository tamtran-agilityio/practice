import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './typescript/app.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { RouteParams, RouteConfig, LocationStrategy, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, HashLocationStrategy } from 'angular2/router';
import {provide} from 'angular2/core';


bootstrap(AppComponent, [ROUTER_PROVIDERS,  
	  provide(LocationStrategy, {useClass: HashLocationStrategy})]);


// ROUTER_PROVIDERS ==> RouteData, RouteParams


// // Path location
// // Hash location 

// // http://localhost/users ==> Path
// // http://localhost/others ==> load pages (load all scripts again)

// // http://localhost/#/users ==> Hash
// // http://localhost/#/others ==> 
// http://localhost/#/others
// http://localhost