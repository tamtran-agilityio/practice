import {Card} from './card';

export class Board {
  private boardTitle: string;
  private boardId: number;
  start: boolean;
  public cards: Card[];

  get _board_id() {
    return this.board_title;
  }
  set _board_id(value: string) {
    this.board_title = value;
  }

  get title() {
    return this.board_title;
  }
  set title(value: string) {
    this.board_title = value;
  }

  constructor(title: string, _board_id: number, _cards: Card[]) {
    this.boardTitle = title;
    this.boardId = _board_id;
    this.start = false;
    _cards = _cards
    this.cards = _cards;
  }
}
