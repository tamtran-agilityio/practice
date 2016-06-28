import {Component, OnInit, Input} from 'angular2/core';
import {BoardService} from '../service/board-service';
import {LabelComment} from '../../model/label-comment';

@Component({
  selector:'label-comment',
  templateUrl: 'app/typescript/component/boards/label-comment.component.html',
  styleUrls: ['app/typescript/component/boards/label-comment.component.css'],
  providers: [BoardService]
})

export class LabelCommentComponent implements OnInit {
  //private labelItems: LabelComment[];
  //private labelCommentActives: LabelCommentActive[];
  //@Input() private memberAddCommentLabel: string;

  constructor(private _labelService: BoardService) {
    //let persistedLabel = JSON.parse(localStorage.getItem('label-comment') || '[]');
    
    //this.labelCommentActives = persistedLabel.map((labelCommentActive: {id: number, memberId: number, active: boolean}) => {
    //let ret = new LabelCommentActive(labelCommentActive.id, labelCommentActive.memberId, labelCommentActive.active);
      //return ret;
    //});
  }

  ngOnInit() {
    //this._labelService.getLabes().then(labelItems => this.labelItems = labelItems);
  }

  private updateStore() {
    //localStorage.setItem('label-comment', JSON.stringify(this.labelCommentActives));
  }

  addLabel(labelItem: LabelComment) {
    //let active: boolean;
    //let itemActive = !labelItem.active;
    //console.log("SSSSSS", itemActive, "labelItem.active", labelItem.active);
    //this.labelCommentActives.push(new LabelCommentActive(labelItem.id , this.memberAddCommentLabel , itemActive));
    //this.updateStore();
  }
}