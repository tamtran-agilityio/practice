import {Component} from 'angular2/core';

@Component({
  selector: 'pop-over',
  templateUrl: 'app/typescript/component/create-board/board-create.component.html',
  styleUrls: ['app/typescript/component/create-board/board-create.component.css']
})

export class CreateBoardComponent {
  onSubmit(value: any){
    console.log("ADASSAS", value);
  }
}
