import {Component, OnInit, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Comment} from '../../model/comment';
import {BoardService} from '../service/board-service';
import {ReversePipe} from './revise.pipe';

@Component({
  selector:'modal-comment',
  templateUrl: 'app/typescript/component/boards/comment.component.html',
  styleUrls: ['app/typescript/component/boards/comment.component.css'],
  providers: [BoardService],
  pipes: [ReversePipe]
})

export class ComponentComment implements OnInit {
  private showPop: boolean = false;
  private condition: string = 'close';
  private memberComment: any;
  private comments: Comment[];
  private commentInits: Comment[];

  @Input() private memberAddComment: string;

  constructor(private _memberService: BoardService) {
    let persistedComment = JSON.parse(localStorage.getItem('member-comment') || '[]');
    
    this.comments = persistedComment.map((commentInit: { name: string, id: number, memberId: number }) => {
    let ret = new Comment(commentInit.name, commentInit.id, commentInit.memberId);
      return ret;
    });
  }

  ngOnInit() {
    this._memberService.getComment().then(commentInits => this.commentInits = commentInits);
  }

  private updateStore() {
    localStorage.setItem('member-comment', JSON.stringify(this.comments));
  }

  saveComment(value: string, commentId: number, memberId: number) {
    commentId = parseInt(this.comments.length.toString()) + 1;
    memberId = parseInt(this.memberAddComment.toString());
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