import {Component, OnInit, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {ListWorkItemComponent} from './list-work-item.component';
import {Card} from '../../model/card';
import {Board} from '../../model/board';
import {CardMember} from '../../model/card-member';
import {BoardService} from '../service/board-service';
import {OffClickDirective} from './off-click.directive';
import {ModalCommentComponent} from './modal-comment.component';

@Component({
  selector: 'board-list',
  templateUrl: 'app/typescript/component/boards/board-list-details.component.html',
  styleUrls: ['app/typescript/component/boards/board-list-details.component.css'],
  providers: [FORM_DIRECTIVES, BoardService],
  directives: [ListWorkItemComponent, OffClickDirective, ModalCommentComponent],
  inputs: ['nameEdit']
})

export class BoardListDetailsComponent implements OnInit{
  private isActive: boolean = false;
  private openActive: boolean = false;
  private board: Board;
  private card: Card;
  private nameCard: string;
  private nameEdit: string;
  private memberComment: CardMember;
  private memberCardPopup: CardMember

  constructor(private _boardService: BoardService, private _router: Router, private _params: RouteParams) {
    this.clickedOutside = this.clickedOutside.bind(this);
    
  }

  ngOnInit() {
    let boardIdParam = parseInt(this._params.get('id'));
    this._boardService.getBoard(boardIdParam).then(board => {
      this.board = board;
      this.board.cards = this.board.cards || [];
    });
  }

  private updateStore() {
    this._boardService.updateBoard(this.board).then(boards => {
      console.warn("Update store boards:", boards);  
    });
  }

  onTagget() {
    let nextCardId = this.board.cards.length + 1;
    this.board.cards.push(new Card(this.nameCard, nextCardId));
    this.updateStore();
    this.nameCard = '';
    this.isActive = false;
  }

  changeName(card:Card, value) {
    card.cardTitle = value;
  }

  onSelecName(card:Card, value) {
    this.changeName(card, value);
  }

  clickedOutside() {
    this.isActive = false;
  }

  cardMemberIdPopup($event) {
    this.memberComment = $event;
  }

  cardSelectPopup($event) {
    this.memberCardPopup = $event
  }
}
