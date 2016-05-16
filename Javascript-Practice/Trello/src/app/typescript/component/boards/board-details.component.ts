import {Component, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Board} from './board';
import {BoardListComponent} from './board-list-details.component';

@Component({
  selector: 'content-wapper',
  templateUrl: 'app/typescript/component/boards/board-details.component.html',
  styleUrls: ['app/typescript/component/boards/board-details.component.css'],
  directives: [BoardListComponent]
})

export class BoardDetailComponent {
  @Input()
    board: string;

    // id: string;
    constructor(params: RouteParams) {
      this.board = params.get('id');
      // this.board = this.id;
      console.log("id", this.board);
    }

}
