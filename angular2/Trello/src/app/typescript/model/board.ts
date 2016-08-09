/**
 * Create model Board
 * @boardId: [Infor init Board]
 * @boardTitle:[Title of Board]
 * @return [Array Board]
 */
import {Card} from './card';

export class Board {
  private boardTitle: string;
  public boardId: number;
  start: boolean;
  public cards: Card[];

  get _board_id() {
    return this.boardId;
  }
  set _board_id(value: number) {
    this.boardId = value;
  }

  get title() {
    return this.boardTitle;
  }
  set title(value: string) {
    this.boardTitle = value;
  }

  constructor(title: string, _board_id: number, _cards: Card[]) {
    this.boardTitle = title;
    this.boardId = _board_id;
    this.start = false;
    this.cards = _cards;
  }
}
