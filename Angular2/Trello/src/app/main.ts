//<reference path="node_modules/angular2/platform/browser.d.ts"/>
//<reference path="node_modules/angular2/src/facade/promise.d.ts"/>
import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './typescript/app.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { RouteParams, RouteConfig, LocationStrategy, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, HashLocationStrategy } from 'angular2/router';
import {provide} from 'angular2/core';

bootstrap(AppComponent, [ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })]);
