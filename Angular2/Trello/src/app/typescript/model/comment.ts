export class Comment {
  private commentId: number;
  private commentTitle: string;

  get _id() {
    return this.commentId;
  }

  set _id(value: number) {
    this.commentId = value;
  }

  get title() {
    return this.commentTitle;
  }

  set title(value: string) {
    this.commentTitle = value;
  }

  constructor(title: string, _id: number) {
    this.commentId = _id;
    this.commentTitle = title;
  }
}