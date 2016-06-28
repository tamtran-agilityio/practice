import {Card} from './card';

export class Board {
  private board_title: string;
  private board_id: number;
  start: boolean;
  card: Card[];

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

  constructor(title: string, _board_id: number) {
    this.board_title = title;
    this.board_id = _board_id;
    this.start = false;
  }
}
