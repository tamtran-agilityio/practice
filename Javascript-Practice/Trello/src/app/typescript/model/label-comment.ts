export class LabelComment {
  private labelId: number;
  private labelColor: string;
  active: boolean;

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
    this.labelId = _id;
    this.labelColor = title;
    this.active = false;
  }
}