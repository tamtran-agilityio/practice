import {Component, OnInit, Input} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Board} from '../../model/board';
import {BoardListDetailsComponent} from './board-list-details.component';
import {BoardService} from '../service/board-service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/typescript/component/boards/board-details.component.html',
  styleUrls: ['app/typescript/component/boards/board-details.component.css'],
  directives: [BoardListDetailsComponent],
  providers: [BoardService]
})

export class BoardDetailComponent implements OnInit {
  private boardId: String;
  private boards: Board[] = [];

  constructor(private _boardService: BoardService, private _router: Router, private _params: RouteParams) {
    this.boardId = _params.get('id');    
  }

  ngOnInit() {
    this._boardService.getBoards().then(boards => this.boards = boards);
  }
}
