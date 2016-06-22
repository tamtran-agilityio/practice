export class CardMember {
  private memberId: number;
  private name: string;
  private card_id: number;

  get _id() {
    return this.name;
  }

  set _id(value: string) {
    this.name = value;
  }

  get title() {
    return this.name;
  }

  set title(value: string) {
    this.name = value;
  }

  constructor(title: string, _id: number, _card_id: number) {
    this.memberId = _id;
    this.title = title;
    this.card_id = _card_id;
  }
}
