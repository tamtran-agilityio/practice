import {Component, OnInit, Input} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router} from 'angular2/router';
import {Board} from '../../model/board';
import {BoardService} from '../service/board-service';
import {BoardCreateComponent} from '../create-board/board-create.component';
import {CreatActionComponent} from '../create-board/create-action.component';
import {BoardDetailComponent} from '../boards/board-details.component';

@Component({
  selector: 'dashboard',
  properties: ['isStart', 'isDisabled'],
  templateUrl:'app/typescript/component/dashboard/dashboard.component.html',
  styleUrls: ['app/typescript/component/dashboard/dashboard.component.css'],
  providers: [BoardService, HTTP_PROVIDERS],
  directives: [CreatActionComponent, BoardCreateComponent, BoardDetailComponent, ROUTER_DIRECTIVES]
})

export class DashBoardComponent implements OnInit {

  private isActive: string = 'close';
  private isActiveSelect: string = 'Start';
  private nameActive: string;
  private boards: Board[] = [];
  private isDisabled: boolean = false;
  private _isStart: boolean = false;
  public selectedItems: Array<Board> = new Array<Board>();

  constructor(private _boardService: BoardService, private _router: Router) {}

  public get isStart(): boolean {
    return this._isStart;
  }

  public set isStart(value: boolean) {
    this._isStart = value;
  }

  ngOnInit() {
    this._boardService.getBoards().then(boards => this.boards = boards);
  }

  private updateStore() {
    localStorage.setItem('board-item', JSON.stringify(this.boards));
  }

  toggleStart(board: Board) {
    board.start = !board.start;
    this.updateStore();
  }

  onCheckSelectStart(boards: Array<any>, value: any) {
    let count = boards.length;
    if (count === 0) {
      this.selectedItems.push(value);
    }

    if (count >= 1) {
      for (let i = 0; i < count; i++) {
        let item = boards[i];
        if (item === value) {
          let j = boards.indexOf(value);
          if (j != -1) {
            boards.splice(j, 1);
            return;
          }
        }
      }
      this.selectedItems.push(value);
    }
  }

  onSelectStart(board: Board) {
    this.onCheckSelectStart(this.selectedItems, board);
    this.toggleStart(board);
  }

  onSelect() {

  }

  createBoard() {
    
  }

}
