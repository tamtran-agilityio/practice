import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router} from 'angular2/router';
import {BoardDetailComponent} from '../boards/board-details.component';
import {Board} from '../../model/board';

@Component({
  selector: 'pop-over',
  templateUrl: 'app/typescript/component/create-board/board-create.component.html',
  styleUrls: ['app/typescript/component/create-board/board-create.component.css'],
  providers: [FORM_DIRECTIVES, HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/board-detail/:id',
    name: 'BoardsDetail',
    component: BoardDetailComponent
  }
])

export class CreateBoardComponent {
  boards: Array<Board>;
  private isActivePop: boolean = false;

  constructor(public _router: Router) {
    let persistedBoads = JSON.parse(localStorage.getItem('board-item') || '[]');
    this.boards = persistedBoads.map( (board: { board_title: string, board_id: number, start: boolean }) => {
    let ret = new Board(board.board_title, board.board_id);
      ret.start = board.start;
      return ret;
    });
  }

  private updateStore() { 
    localStorage.setItem('board-item', JSON.stringify(this.boards));
  }

  onSubmit(value: string, board_id: number){
    this.isActivePop = true;
    board_id = parseInt(this.boards.length.toString()) + 1;
    this.boards.push(new Board(value['name'], board_id));
    this.updateStore();
    this._router.parent.navigate(['BoardsDetail', {id: board_id}]);
  }
}