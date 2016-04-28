
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

if ('production' === process.env.ENV) {
  let ngCore = require('angular2/core');
  ngCore.enableProdMode();
}

import {AppComponent} from './main';

bootstrap(AppComponent, [ROUTER_PROVIDERS]);
