import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {BoardListItemComponent} from './board-list-details-item.component';
import {Card} from '../../model/card';

@Component({
  selector: 'board-list',
  templateUrl: 'app/typescript/component/boards/board-list-details.component.html',
  styleUrls: ['app/typescript/component/boards/board-list-details.component.css'],
  providers: [FORM_DIRECTIVES],
  directives: [BoardListItemComponent]
})

export class BoardListComponent {
  isActive: boolean = false;

  private cards: Array<Card>;
  private board_id_load: Number;

  constructor(private _params: RouteParams) {
    this.board_id_load = _params.get('id');
    console.log("id zAAAAAAAAAA", this.board_id_load);

    let persistedBoads = JSON.parse(localStorage.getItem('card-item') || '[]');
    this.cards = persistedBoads.map((card: { name: String, id: Number, board_id: Number }) => {
    let ret = new Card(card.name, card.id, card.board_id);
      return ret;
    });
  }

  private updateStore() {
    localStorage.setItem('card-item', JSON.stringify(this.cards));
  }

  onTagget(value: string, card_id: number, board_id: number) {
    board_id = parseInt(this.board_id_load.toString());
    card_id = parseInt(this.cards.length.toString()) + 1;
    this.cards.push(new Card(value['name'], card_id, board_id));
    this.updateStore();
  }
}
