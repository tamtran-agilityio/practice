export class LabelComment {
  public labelId: number;
  private labelColor: string;
  active: boolean;

  get _id() {
    return this.labelId;
  }

  set _id(value: number) {
    this.labelId = value;
  }

  get title() {
    return this.labelColor;
  }

  set title(value: string) {
    this.labelColor = value;
  }

  constructor(title: string, _id: number) {
    this.labelId = _id;
    this.labelColor = title;
    this.active = false;
  }
}