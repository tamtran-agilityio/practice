import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router} from 'angular2/router';
import {Board} from '../../model/board';
import {BoardDetailComponent} from '../boards/board-details.component';

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
  isActive: boolean = true;

  constructor(public _router: Router) {
    let persistedBoads = JSON.parse(localStorage.getItem('board-item') || '[]');
    console.log("persistedBoads", persistedBoads);
    this.boards = persistedBoads.map( (board: { name: String, id: Number, start: Boolean }) => {
    let ret = new Board(board.name, board.id);
      ret.start = board.start;
      return ret;
    });
  }

  private updateStore(data:any) { 
    localStorage.setItem('board-item', JSON.stringify(this.boards));
  }

  onSubmit(value: string, id: number){
    id = parseInt(this.boards.length.toString()) + 1;
    this.boards.push(new Board(value['name'], id));
    this.updateStore();
  }
}