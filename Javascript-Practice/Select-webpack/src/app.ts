import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './main';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { RouteParams, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {provide} from 'angular2/core';
import { PlatformLocation, Location, LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF}
from 'angular2/platform/common';
bootstrap(AppComponent, [ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })]);
