/**
 * Create model CardMember
 * @memberId: [Infor init Board]
 * @memberTitle:[Title of Board]
 * @comments: [Array comments of card meember]
 * @labelComments: [Array labelComments of card meember]
 * @return [Array CardMember]
 */
import {Comment} from './comment';
import {LabelComment} from './label-comment';

export class CardMember {
  public memberId: number;
  public memberTitle: string;
  public comments: Comment[];
  public labelComments: LabelComment[];

  get _id() {
    return this.memberId;
  }

  set _id(value: number) {
    this.memberId = value;
  }

  get title() {
    return this.memberTitle;
  }

  set title(value: string) {
    this.memberTitle = value;
  }

  constructor(title: string, _id: number, _comments: Comment[] = [] , _labelComments: LabelComment[]= []) {
    this.memberId = _id;
    this.memberTitle = title;
    this.comments = _comments || [];
    this.labelComments = _labelComments;
  }
}
