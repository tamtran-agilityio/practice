import {Component, OnInit, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {Comment} from '../../model/comment';
import {CardMember} from '../../model/card-member';
import {BoardService} from '../service/board-service';
import {ReversePipe} from './revise.pipe';
import {LabelCommentComponent} from './label-comment.component';

@Component({
  selector:'modal-comment',
  templateUrl: 'app/typescript/component/boards/modal-comment.component.html',
  styleUrls: ['app/typescript/component/boards/modal-comment.component.css'],
  providers: [BoardService],
  directives: [LabelCommentComponent],
  pipes: [ReversePipe]
})

export class ModalCommentComponent implements OnInit {
  private showPop: boolean = false;
  private memberComment: string;

  @Input() private memberCardComment: CardMember;

  constructor(private _boardService: BoardService,  private _params: RouteParams) {
  }

  ngOnInit() {
    console.log("memberCardComment" , this.memberCardComment);
  }

  private updateStore() {
  }

  saveComment() {
    var commentId = parseInt(this.memberCardComment.comments.length.toString()) + 1;
    this.memberCardComment.comments.push(new Comment(this.memberComment, commentId));
    this.memberComment = '';
  }

  closePopup() {
    this.showPop = true;
  }
}