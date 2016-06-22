import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {BoardListItemComponent} from './board-list-details-item.component';
import {Card} from '../../model/card';
import {BoardService} from '../service/board-service';

@Component({
  selector: 'board-list',
  templateUrl: 'app/typescript/component/boards/board-list-details.component.html',
  styleUrls: ['app/typescript/component/boards/board-list-details.component.css'],
  providers: [FORM_DIRECTIVES],
  directives: [BoardListItemComponent]
})

export class BoardListComponent implements OnInit{
  isActive: boolean = false;

  private cards: Card[] = [];
  private cardsInit: Card[];
  private boardId: Number;
  private count: number;

  constructor(private _boardService: BoardService, private _router: Router, private _params: RouteParams) {
    this.boardId = parseInt(_params.get('id'));

    let persistedBoads = JSON.parse(localStorage.getItem('card-item') || '[]');
    
    this.cards = persistedBoads.map((card: { name: string, id: number, board_id: number }) => {
    let ret = new Card(card.name, card.id, card.board_id);
      return ret;
    });
  }

  ngOnInit() {
    this._boardService.getCards().then(cardsInit => this.cardsInit = cardsInit);
  }

  private updateStore() {
    localStorage.setItem('card-item', JSON.stringify(this.cards));
  }

  onTagget(value: string, card_id: number, board_id: number) {
    board_id = parseInt(this.boardId.toString());
    card_id = parseInt(this.cards.length.toString()) + 1;
    this.cards.push(new Card(value['name'], card_id, board_id));
    this.updateStore();
    this.nameCard = '';
  }
}
