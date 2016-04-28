///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="./typings/webpack.d.ts" />

// polyfills
import 'es6-shim';

// (these modules are what is in 'angular2/bundles/angular2-polyfills' so don't use that here)
import '../node_modules/zone.js/dist/zone.js';

import 'reflect-metadata';

// Angular 2 Deps
import 'rxjs/Rx';
