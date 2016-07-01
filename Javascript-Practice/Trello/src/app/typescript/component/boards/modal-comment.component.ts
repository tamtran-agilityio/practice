import {Component, OnInit, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {Comment} from '../../model/comment';
import {Board} from '../../model/board';
import {CardMember} from '../../model/card-member';
import {BoardService} from '../service/board-service';
import {ReversePipe} from './revise.pipe';
import {LabelCommentComponent} from './label-comment.component';
import {LabelActionComponent} from './label-action.component';

@Component({
  selector:'modal-comment',
  templateUrl: 'app/typescript/component/boards/modal-comment.component.html',
  styleUrls: ['app/typescript/component/boards/modal-comment.component.css'],
  providers: [BoardService],
  directives: [LabelCommentComponent, LabelActionComponent],
  pipes: [ReversePipe]
})

export class ModalCommentComponent implements OnInit {
  public  cardMembers:CardMember[];
  private showPop: boolean = false;
  private memberComment: string;
  private cardSelectItem: number;
  private board: Board;
  private memberCardCommentId: number;

  @Input() public memberCardComment: CardMember;
  @Input() public cardSelectIdPopup: CardMember;

  constructor(private _boardService: BoardService,  private _params: RouteParams) {
  }

  ngOnInit() {
    let boardIdParam = parseInt(this._params.get('id'));
    this._boardService.getBoard(boardIdParam).then(board => {
      this.board = board;
    });
  }

  private updateStore() {
    this._boardService.updateBoard(this.board).then(boards => {
      console.warn("Update store boards 222222:", boards); 
    });
  }

  saveComment() {
    let boardIdParam = parseInt(this._params.get('id'));
    let memberAddComment = this.memberCardComment.memberId - 1;
    let commentId = this.memberCardComment.comments.length + 1;
    this.cardSelectItem = parseInt(this.cardSelectIdPopup.cardId) - 1;
    this._boardService.getBoard(boardIdParam).then(board => {
      this.board = board;
      this.board.cards[this.cardSelectItem].cardMembers = this.board.cards[this.cardSelectItem].cardMembers || [];
      this.memberCardComment.comments.push(new Comment(this.memberComment, commentId));
      this.board.cards[this.cardSelectItem].cardMembers[memberAddComment].comments.push(new Comment(this.memberComment, commentId));
      this.updateStore();
      this.memberComment = '';
    });
  }

  closePopup() {
    this.showPop = true;
  }
}