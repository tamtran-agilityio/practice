import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {BoardListItemComponent} from './board-list-details-item.component';

@Component({
  selector: 'board-list',
  templateUrl: 'app/typescript/component/boards/board-list-details.component.html',
  styleUrls: ['app/typescript/component/boards/board-list-details.component.css'],
  providers: [FORM_DIRECTIVES],
  directives: [BoardListItemComponent]
})

export class BoardListComponent {
  isActive: boolean = false;

  onTagget(value: string) {
    console.log("SSSS", value);
  }
}
