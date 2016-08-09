import {Component, OnInit, Input, ElementRef} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {BoardService} from '../service/board-service';
import {Board} from '../../model/board';
import {CardMember} from '../../model/card-member';
import {LabelComment} from '../../model/label-comment';
declare let $:any;

@Component({
  selector:'label-comment',
  templateUrl: 'app/typescript/component/boards/label-comment.component.html',
  styleUrls: ['app/typescript/component/boards/label-comment.component.css'],
  providers: [BoardService]
})

export class LabelCommentComponent implements OnInit {
  private labelItems: LabelComment;
  private activePopup = true;
  private board: Board;
  private el: HTMLElement;

  /**
   * @memberCardComment [input to input board list details of each card member]
   * @cardSelectIdPopup [input to input board list details of each card member]
   */

  @Input() public memberCardLabelComments: CardMember;
  @Input() public memberSelectLabel: CardMember;

  constructor(private _boardService: BoardService, private _params: RouteParams, private element: ElementRef) {
    this.element = element;
  }

  ngOnInit() {
    let container, containerPopup;
    this.container = $(this.element.nativeElement).find('.close');
    this.containerPopup = $(this.element.nativeElement).find('.modal-label');
    //this.container.on('click', function() {
      //console.log("SSSSSSSSSSS---->>");
    //}
  }

   private updateStore() {
    this._boardService.updateBoard(this.board).then(boards => {
    });
  }
  
  /**
   * @selecLabel [selet label of member]
   * @labelComment [input before select item]
   */
  selecLabel(labelComment: LabelComment) {
    labelComment.active = !labelComment.active;
    let boardIdParam = parseInt(this._params.get('id'));
    let labelCommentsId = labelComment.labelId - 1;
    let memberAddComment = this.memberCardLabelComments.memberId - 1;
    this.cardSelectItem = parseInt(this.memberSelectLabel.cardId) - 1;
    this._boardService.getBoard(boardIdParam).then(board => {
      this.board = board;
      this.board.cards[this.cardSelectItem].cardMembers[memberAddComment].labelComments[labelCommentsId].active = labelComment.active;
      this.updateStore();
    });
  }

  getPopup() {
    if(!this.activePopup){
      return "none";
    }
  }
}