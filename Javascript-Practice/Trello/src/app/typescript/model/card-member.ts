import {Comment} from './comment';
import {LabelComment} from './label-comment';

export class CardMember {
  private memberId: number;
  private memberTitle: string;
  public comments: Comment[];
  public labelComments: LabelComment[];

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

  constructor(title: string, _id: number, _comments: Comment[] = [] , _labelComments: LabelComment[]= []) {
    this.memberId = _id;
    this.memberTitle = title;
    this.comments = _comments || [];
    this.labelComments = _labelComments;
  }
}
