import {Component, OnInit, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {BoardListItemComponent} from './board-list-details-item.component';
import {Card} from '../../model/card';
import {BoardService} from '../service/board-service';
import {OffClickDirective} from './off-click.directive';
import {ComponentComment} from './modal-comment.component';

@Component({
  selector: 'board-list',
  templateUrl: 'app/typescript/component/boards/board-list-details.component.html',
  styleUrls: ['app/typescript/component/boards/board-list-details.component.css'],
  providers: [FORM_DIRECTIVES, BoardService],
  directives: [BoardListItemComponent, OffClickDirective, ComponentComment],
  inputs: ['nameEdit']
})

export class BoardListComponent implements OnInit{
  private isActive: boolean = false;
  private openActive: boolean = false;
  private cards: Card[] = [];
  private cardsInit: Card[];
  private boardId: number;
  private nameCard: string;
  private nameEdit: string;
  @Input() private membercardId: string;

  constructor(private _boardService: BoardService, private _router: Router, private _params: RouteParams) {
    this.clickedOutside = this.clickedOutside.bind(this);
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

  onTagget(value: string, card_id: number, board_id: number, id: number) {
    board_id = parseInt(this.boardId.toString());
    card_id = parseInt(this.cards.length.toString()) + 1;
    this.cards.push(new Card(value['name'], card_id, board_id));
    this.updateStore();
    this.nameCard = '';
    this.isActive = false;
  }

  changeName(card:Card, value) {
    card.name = value;
    this.updateStore();
  }

  onSelecName(card:Card, value) {
    this.changeName(card, value);
  }

  clickedOutside() {
    this.isActive = false;
  }

  cardMemberIdPopup($event) {
    this.membercardId = $event.value;
  }
}
