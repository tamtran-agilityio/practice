import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Board} from '../boards/board';
import {BoardService} from '../service/board-service';
import {CreateBoardComponent} from '../create-board/board-create.component';
import {CreatAction} from '../create-board/create-action.component';

@Component({
  selector: 'content-wapper',
  templateUrl:'app/typescript/component/dashboard/dashboard.component.html',
  styleUrls: ['app/typescript/component/dashboard/dashboard.component.css'],
  providers: [BoardService],
  directives: [CreatAction, CreateBoardComponent]
})

export class DashBoardComponent implements OnInit {

  boards: Board[] = [];
  public selectedItems: Array<Board> = new Array<Board>();
  constructor(private _boardService: BoardService, private _router: Router) { }

  ngOnInit() {
    this._boardService.getBoards().then(boards => this.boards = boards);
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

  onSelect(board: Board) {

  }

  onSelectStart(board: Board) {
    this.onCheckSelectStart(this.selectedItems, board);
  }

  createBoard() {
    console.log(":SSASSASSS");
  }
}
