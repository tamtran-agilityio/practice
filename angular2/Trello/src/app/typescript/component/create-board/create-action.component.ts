import {Component} from 'angular2/core';

@Component({
  selector: 'create-action',
  templateUrl: 'app/typescript/component/create-board/create-action.component.html',
  styleUrls: ['app/typescript/component/create-board/create-action.component.css']
})

export class CreatActionComponent {
  isActive: boolean = false;
  onCreateBoard() {
    this.isActive = true;
  }
}
