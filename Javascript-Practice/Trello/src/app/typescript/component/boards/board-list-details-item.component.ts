import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'list-work-item',
  templateUrl: 'app/typescript/component/boards/board-list-details-item.component.html',
  styleUrls: ['app/typescript/component/boards/board-list-details-item.component.css'],
  providers: [FORM_DIRECTIVES]
})

export class BoardListItemComponent {
  public value: string = "ASSSSSSSSSSS";

}
