export class Card {
  private id: number;
  private name: string;
  private board_id: number;

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

  constructor(title: string, _id: number, _board_id: number) {
    this.id = _id;
    this.title = title;
    this.board_id = _board_id;
  }
}
