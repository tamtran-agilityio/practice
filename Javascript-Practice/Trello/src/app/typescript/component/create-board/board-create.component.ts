import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router} from 'angular2/router';
import {Board} from '../boards/board';


@Component({
  selector: 'pop-over',
  templateUrl: 'app/typescript/component/create-board/board-create.component.html',
  styleUrls: ['app/typescript/component/create-board/board-create.component.css'],
  providers: [FORM_DIRECTIVES, HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES]
})

export class CreateBoardComponent {
  boards: Array<Board> = [];
  isActive: boolean = true;

  constructor() {
    let persistedBoads = JSON.parse(localStorage.getItem('board-item') || '[]');
    this.boards = persistedBoads.map((board: { _title: string, _id: number, start: boolean }) => {
    let ret = new Board(board._title, board._id);
      ret.start = board.start;
      return ret;
    });
  }

  private updateStore() {
    localStorage.setItem('board-item', JSON.stringify(this.boards));
  }

  onSubmit(value: string, id: number){
    id = parseInt(this.boards.length.toString()) + 1;
    this.boards.push(new Board(value['name'], id));
    this.updateStore();
  }
}
