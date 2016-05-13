import {Component, Inject, Input, OnInit, ElementRef} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router} from 'angular2/router';
import {Board} from './component/boards/board';
import {DashBoardComponent} from './component/dashboard/dashboard.component';
import {BoardListComponent} from './component/boards/board-list.component';
import {CreateBoardComponent} from './component/create-board/board-create.component'


@Component({
  selector: 'my-app',
  template: `
  <header>
    <a [routerLink]="['BoardContent']" class="header-logo">
      <span class="header-logo-loading"></span>
      <span class="header-logo-defaulf"></span>
    </a>
    <div class="header-boards-button">
      <a [routerLink]="['BoarList']" class="header-btn header-boards">
        <span class="header-btn-icon"></span>
        <span class="header-btn-text"> Boards </span>
      </a>
    </div>
    <div class="header-user">
      <a [routerLink]="['CreateBoards']" class="header-btn">
        <span class="header-btn-icon"></span>
      </a>
      <a href="#" class="header-btn header-member">
        <span class="member">
          <span class="member-initials"></span>
        </span>
        <span class="header-btn-text"> Tamtamxuan</span>
      </a>
      <a href="#" class="header-btn "></a>
      <a href="#" class="header-btn "></a>
    </div>
  </header>
  <div class="content">
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})

@RouteConfig([
  {
    path: '',
    name: 'BoardContent',
    component: DashBoardComponent,
    useAsDefault: true
  },
  {
    path: '/boards',
    name: 'BoarList',
    component: BoardListComponent
  },
  {
    path: '/create-board',
    name: 'CreateBoards',
    component: CreateBoardComponent
  }
])

export class AppComponent {
}
