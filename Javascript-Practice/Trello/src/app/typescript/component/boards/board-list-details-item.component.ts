import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router} from 'angular2/router';
import {Card} from '../../model/card';
import {BoardService} from '../service/board-service';

@Component({
  selector: 'list-work-item',
  templateUrl: 'app/typescript/component/boards/board-list-details-item.component.html',
  styleUrls: ['app/typescript/component/boards/board-list-details-item.component.css'],
  providers: [FORM_DIRECTIVES, BoardService],
  directives: [ROUTER_DIRECTIVES]
})

export class BoardListItemComponent implements OnInit {
  private cards: Card[];
  private boardId: Number;

  constructor(private _boardService: BoardService, private _router: Router, private _params: RouteParams) {
    this.boardId = parseInt(_params.get('id'));
  }

  ngOnInit() {
    this._boardService.getCards().then(cards => this.cards = cards);
  }
}
