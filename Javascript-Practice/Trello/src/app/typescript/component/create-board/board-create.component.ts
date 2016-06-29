import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router} from 'angular2/router';
import {BoardDetailComponent} from '../boards/board-details.component';
import {Board} from '../../model/board';
import {BoardService} from '../service/board-service';

@Component({
  selector: 'pop-over',
  templateUrl: 'app/typescript/component/create-board/board-create.component.html',
  styleUrls: ['app/typescript/component/create-board/board-create.component.css'],
  providers: [FORM_DIRECTIVES, HTTP_PROVIDERS, BoardService],
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
  board: Board;
  private isActivePop: boolean = false;

  constructor(public _router: Router, private _boardService: BoardService) {
  }

  private updateStore() { 
    this._boardService.updateBoard(this.board).then(boards => {
      console.warn("Update store boards:", boards);  
    });
  }

  onSubmit(value: string){
    this.isActivePop = true;
    let boardId = Math.floor((Math.random() * 100000) + 1);
    this.board = new Board(value['name'], boardId);
    this.updateStore();
    this._router.parent.navigate(['BoardsDetail', {id: boardId}]);
  }
}