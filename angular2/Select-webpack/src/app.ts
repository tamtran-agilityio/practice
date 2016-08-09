// /// <reference path="../node_modules/angular2/typings/browser.d.ts" />  // no longer contains all of es6 type definitions
/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './main';
import 'rxjs/Rx';
import { RouteParams, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {provide} from 'angular2/core';
import { PlatformLocation, Location, LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF}
from 'angular2/platform/common';
bootstrap(AppComponent, [ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })]);
