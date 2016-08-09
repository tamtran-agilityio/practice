import { bootstrap }   from 'angular2/platform/browser';
import { AppComponent } from './app.component';

import 'rxjs/Rx';

// import {WikiComponent}        from './wiki/wiki.component';
// import {WikiSmartComponent} from './wiki/wiki-smart.component';
import {TohComponent}  from './toh/toh.component';
import {HeroService, HeroServiceMysql} from './toh/hero.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
// bootstrap(WikiComponent);
// bootstrap(WikiSmartComponent);
bootstrap(TohComponent, [
	HTTP_PROVIDERS, 
	// provide(HeroService, {useClass: HeroService})
	provide(HeroService, {useClass: HeroServiceMysql})
	]);
bootstrap(AppComponent);
