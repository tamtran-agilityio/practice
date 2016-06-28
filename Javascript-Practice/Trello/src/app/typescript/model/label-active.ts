export class LabelCommentActive {
  private id: number;
  private memberid: number;
  active: boolean;

  get _id() {
    return this.memberid;
  }

  set _id(value: number) {
    this.memberid = value;
  }

  get title() {
    return this.memberid;
  }

  set title(value: number) {
    this.memberid = value;
  }

  constructor(_memberid: number, _id: number) {
    this.id = _id;
    this.title = _memberid;
    this.active = false;
  }
}