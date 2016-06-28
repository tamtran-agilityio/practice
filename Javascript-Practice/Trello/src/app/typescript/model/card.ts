import {CardMember} from './card-member';

export class Card {
  private card_id: number;
  private card_title: string;
  private board_id: number;
  cardMembers: CardMember[];

  get _id() {
    return this.card_id;
  }

  set _id(value: string) {
    this.card_id = value;
  }

  get title() {
    return this.card_title;
  }

  set title(value: string) {
    this.card_title = value;
  }

  constructor(title: string, _id: number, _board_id: number, _cardMembers: [any]) {
    this.card_id = _id;
    this.card_title = title;
    this.board_id = _board_id;
    this.cardMembers = _cardMembers;
  }
}
