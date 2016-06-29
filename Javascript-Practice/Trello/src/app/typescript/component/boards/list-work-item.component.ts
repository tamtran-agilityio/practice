import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router} from 'angular2/router';
import {CardMember} from '../../model/card-member';
import {BoardService} from '../service/board-service';
import {OffClickDirective} from './off-click.directive';


@Component({
  selector: 'list-work-item',
  templateUrl: 'app/typescript/component/boards/list-work-item.component.html',
  styleUrls: ['app/typescript/component/boards/list-work-item.component.css'],
  providers: [FORM_DIRECTIVES, BoardService],
  directives: [ROUTER_DIRECTIVES, OffClickDirective],
  inputs: ['cardSelect']
})

export class BoardListItemComponent implements OnInit {
  private openActive: boolean = false;
  private cardMembers: CardMember;
  private cardMemberItems: CardMember[];
  private boardId: number;
  private cardSelect: CardMember;
  private cardSelectItem: number;
  private cardMember: string;
  private cardMembersId: string;
  @Output() memberSelect = new EventEmitter();
  @Output() cardSelectPopup = new EventEmitter();

  constructor(private _boardService: BoardService, private _router: Router, private _params: RouteParams) {
    this.clickedOutside = this.clickedOutside.bind(this);
  }

  ngOnInit() {
    let boardIdParam = parseInt(this._params.get('id'));
    this.cardSelectItem = parseInt(this.cardSelect.cardId) - 1;
    this._boardService.getBoard(boardIdParam).then(board => {
      this.board = board;
      this.board.cards.cardMembers = this.board.cards[this.cardSelectItem].cardMembers || [];
    });
  }

  private updateStore() {
    this._boardService.updateBoard(this.board).then(boards => {
      console.warn("Update store boards 222222:", boards); 
    });
  }

  onSave() {
    let cardAdd = parseInt(this.cardSelect.cardId) - 1;
    if ((this.cardMember != "") && (this.cardMember != undefined)) {
      let nextMember = parseInt(this.board.cards.cardMembers.length) + 1;
      this.board.cards[cardAdd].cardMembers.push(new CardMember(this.cardMember , nextMember));
      this.updateStore();
      this.cardMember= '';
    } else {
      return;
    }
  }

  onAdd() {
    this.openActive = true;
  }

  clickedOutside() {
    this.openActive = false;
  }

  createComment(cardMember: CardMember) {
    this.memberSelect.emit(cardMember);
    this.cardSelectPopup.emit(this.cardSelect);
  }
}
