export class LabelComment {
  private id: number;
  private color: string;
  active: boolean;

  get _id() {
    return this.color;
  }

  set _id(value: string) {
    this.color = value;
  }

  get title() {
    return this.color;
  }

  set title(value: string) {
    this.color = value;
  }

  constructor(title: string, _id: number) {
    this.id = _id;
    this.title = title;
    this.active = false;
  }
}