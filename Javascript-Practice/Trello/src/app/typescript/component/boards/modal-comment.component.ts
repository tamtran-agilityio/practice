import {Component, OnInit, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';
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

export class ComponentComment implements OnInit {
  private showPop: boolean = false;
  private condition: string = 'close';
  private memberComment: any;
  private comments: Comment[];
  private commentInits: Comment[];
  private cardMemberItems: CardMember[];

  @Input() private memberCommentCard: string;

  constructor(private _memberService: BoardService) {
    let persistedComment = JSON.parse(localStorage.getItem('member-comment') || '[]');
    
    this.comments = persistedComment.map((commentInit: { name: string, id: number, memberId: number }) => {
    let ret = new Comment(commentInit.name, commentInit.id, commentInit.memberId);
      return ret;
    });
  }

  ngOnInit() {
    this._memberService.getComment().then(commentInits => this.commentInits = commentInits);
    this._memberService.getMemberCards().then(cardMemberItems => this.cardMemberItems = cardMemberItems);
  }

  private updateStore() {
    localStorage.setItem('member-comment', JSON.stringify(this.comments));
  }

  saveComment(value: string, commentId: number, memberId: number) {
    commentId = parseInt(this.comments.length.toString()) + 1;
    console.log("SSSSSSS-----AAAA", this.memberCommentCard);
    memberId = parseInt(this.memberCommentCard.toString());
    if ((value['name'] != "") && (value['name'] != undefined)) {
      this.comments.push(new Comment(value['name'], commentId , memberId));
      this.updateStore();
      this.memberComment= '';
    } else {
      return;
    }
  }

  closePopup() {
    this.showPop = true;
  }
}