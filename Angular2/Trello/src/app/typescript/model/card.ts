/**
 * Create Model Card 
 * @cardId: [Infor init Card]
 * @cardTitle: [Title of Card]
 * @cardMembers: [Array card member]
 * @return [Array Card]
 */
import {CardMember} from './card-member';

export class Card {
  public cardId: number;
  public cardTitle: string;
  public cardMembers: CardMember[];

  get _id() {
    return this.cardId;
  }

  set _id(value: number) {
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
