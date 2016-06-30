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
  @Input() public cardSelectIdPopup: CardMember;

  constructor(private _labelService: BoardService, private _params: RouteParams, private element: ElementRef) {
    this.element = element;
  }

  ngOnInit() {
    this.container = $(this.element.nativeElement).find('.close');
    this.container.on( "click", function() {
      console.log("SSSSSSSSSSS---->>");
    }
  }
  
  addLabel(labelComment: LabelComment) {
    labelComment.active = !labelComment.active;
  }

  getPopup() {
    if(!this.activePopup){
      return "none";
    }
  }
}