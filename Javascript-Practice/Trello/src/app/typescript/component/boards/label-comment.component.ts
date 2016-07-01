import {Component, OnInit, Input, ElementRef} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {BoardService} from '../service/board-service';
import {LabelComment} from '../../model/label-comment';
declare let $:JQueryStatic;

@Component({
  selector:'label-comment',
  templateUrl: 'app/typescript/component/boards/label-comment.component.html',
  styleUrls: ['app/typescript/component/boards/label-comment.component.css'],
  providers: [BoardService]
})

export class LabelCommentComponent implements OnInit {
  private labelItems: LabelComment;
  private activePopup = true;
  private el: HTMLElement;

  @Input() public memberCardLabelComments: CardMember;
  @Input() public memberSelectLabel: CardMember;

  constructor(private _boardService: BoardService, private _params: RouteParams, private element: ElementRef) {
    this.element = element;
  }

  ngOnInit() {
    this.container = $(this.element.nativeElement).find('.close');
    this.container.on('click', function() {
      console.log("SSSSSSSSSSS---->>");
    }
  }

   private updateStore() {
    this._boardService.updateBoard(this.board).then(boards => {
    });
  }
  
  selecLabel(labelComment: LabelComment) {
    labelComment.active = !labelComment.active;
    let boardIdParam = parseInt(this._params.get('id'));
    let memberAddComment = this.memberCardLabelComments.memberId - 1;
    this.cardSelectItem = parseInt(this.memberSelectLabel.cardId) - 1;
    console.log("SSSSSSS", this.memberCardLabelComments);
    console.log("SSSSSSSSSSSSS3333", this.memberSelectLabel);
    this._boardService.getBoard(boardIdParam).then(board => {
      this.board = board;
      this.board.cards[this.cardSelectItem].cardMembers[memberAddComment].labelComments.push( );
    });
  }

  getPopup() {
    if(!this.activePopup){
      return "none";
    }
  }
}