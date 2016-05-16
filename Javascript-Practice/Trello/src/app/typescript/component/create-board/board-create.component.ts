import {Component} from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
  selector: 'pop-over',
  templateUrl: 'app/typescript/component/create-board/board-create.component.html',
  styleUrls: ['app/typescript/component/create-board/board-create.component.css'],
  providers: [ FORM_DIRECTIVES]
})

export class CreateBoardComponent {
  onSubmit(value: any): void {
    console.log("ADASSAS", value);
  }
}
