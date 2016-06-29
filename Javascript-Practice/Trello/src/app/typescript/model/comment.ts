export class Comment {
  private commentId: number;
  private commentTitle: string;

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

  constructor(title: string, _id: number) {
    this.commentId = _id;
    this.commentTitle = title;
  }
}