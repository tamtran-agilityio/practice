import {Component, Inject, Input, OnInit, ElementRef} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router} from 'angular2/router';
import {Board} from './model/board';
import {DashBoardComponent} from './component/dashboard/dashboard.component';
import {BoardListDetailsComponent} from './component/boards/board-list-details.component';
import {BoardCreateComponent} from './component/create-board/board-create.component';
import {BoardDrawerComponent} from './component/create-board/board-drawer.component';
import {BoardDetailComponent} from './component/boards/board-details.component';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <a [routerLink]="['BoardContent']" class="header-logo">
      <span class="header-logo-loading"></span>
      <span class="header-logo-defaulf"></span>
    </a>
    <div class="header-boards-button">
      <a [routerLink]="['BoarDrawer']" class="header-btn header-boards">
        <i class="fa fa-clipboard" aria-hidden="true"></i>
        <span class="header-btn-text"> Boards </span>
      </a>
    </div>
    <div class="header-user">
      <a class="header-btn" data-toggle="modal" data-target="#myModal">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </a>

      <a href="#" class="header-btn header-member">
        <span class="member">
          <span class="member-initials"></span>
        </span>
        <span class="header-btn-text"> Tamtamxuan</span>
      </a>
      <a href="#" class="header-btn ">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
      </a>
      <a href="#" class="header-btn ">
        <i class="fa fa-snapchat-ghost" aria-hidden="true"></i>
      </a>
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
    path: '/',
    name: 'BoardContent',
    component: DashBoardComponent,
    useAsDefault: true
  },
  {
    path: '/boards',
    name: 'BoarList',
    component: BoardListDetailsComponent
  },
  {
    path: '/boards-drawer',
    name: 'BoarDrawer',
    component: BoardDrawerComponent
  },
  {
    path: '/board-detail/:id',
    name: 'BoardsDetail',
    component: BoardDetailComponent
  }
])

export class AppComponent {
}
