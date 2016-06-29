import {CardMember} from './card-member';

export class Card {
  private cardId: number;
  private cardTitle: string;
  public cardMembers: CardMember[];

  get _id() {
    return this.cardId;
  }

  set _id(value: string) {
    this.cardId = value;
  }

  get title() {
    return this.cardTitle;
  }

  set title(value: string) {
    this.cardTitle = value;
  }

  constructor(title: string, _id: number, _cardMembers: CardMember[] = []) {
    this.cardId = _id;
    this.cardTitle = title;
    this.cardMembers = _cardMembers || [];
  }
}
