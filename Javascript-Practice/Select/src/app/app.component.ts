/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {AppState} from './app.service';
// import jQuery from 'jquery';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styles: [
    `
    md-toolbar ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    md-toolbar li {
      display: inline;
    }
    md-toolbar li.active {
      background-color: lightgray;
    }
  `],
  template: `
    <pre>this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>
      <div>
        <img [src]="angularclassLogo" width="10%">
      </div>
    </footer>
  `
})

export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {
        }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
