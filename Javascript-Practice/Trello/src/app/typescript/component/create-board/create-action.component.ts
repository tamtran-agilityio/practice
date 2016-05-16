import {Component} from 'angular2/core';

@Component({
  selector: 'create-action',
  templateUrl: 'app/typescript/component/create-board/create-action.component.html',
  styleUrls: ['app/typescript/component/create-board/create-action.component.css']
})

export class CreatAction {
  isActive: boolean = true;
  onCreateBoard() {
    console.log("SSSSSSSSSSSSSSSS");
    this.isActive = false;
  }
}
