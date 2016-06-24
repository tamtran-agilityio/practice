export class Comment {
  private id: number;
  private name: string;
  private memberId: number;

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

  constructor(title: string, _id: number, _member_id: number) {
    this.id = _id;
    this.title = title;
    this.memberId = _member_id;
  }
}