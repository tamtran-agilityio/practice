import {Component, OnInit, Input} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {BoardService} from '../service/board-service';
import {LabelComment} from '../../model/label-comment';

@Component({
  selector:'label-comment',
  templateUrl: 'app/typescript/component/boards/label-comment.component.html',
  styleUrls: ['app/typescript/component/boards/label-comment.component.css'],
  providers: [BoardService]
})

export class LabelCommentComponent implements OnInit {
  private labelItems: LabelComment; 

  @Input() private memberCardComment: CardMember;
  @Input() private cardSelectIdPopup: CardMember;

  constructor(private _labelService: BoardService, private _params: RouteParams) {
  }

  ngOnInit() {
    this._labelService.getLabes().then(labelItems => this.labelItems = labelItems);
  }
  
  addLabel(labelItem: LabelComment) {
    labelItem.active = !labelItem.active;

  }
}