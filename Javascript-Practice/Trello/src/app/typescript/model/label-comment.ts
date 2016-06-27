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

export class LabelCommentActive {
  private id: number;
  private memberid: number;
  active: boolean;

  get _id() {
    return this.memberid;
  }

  set _id(value: string) {
    this.memberid = value;
  }

  get title() {
    return this.memberid;
  }

  set title(value: string) {
    this.memberid = value;
  }

  constructor(_memberid: number, _id: number) {
    this.id = _id;
    this.title = _memberid;
    this.active = false;
  }
}