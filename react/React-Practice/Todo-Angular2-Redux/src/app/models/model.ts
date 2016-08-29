export interface TodoAction {
  type: string;
  id: number;
  text?: string;
}

export class Todo {
  private text: string;
  private id: number;
  completed: boolean;
  editing: boolean;

  get _text() {
    return this.text;
  }

  set _text(value: string) {
    this.text = value || '';
  }

  get _id() {
    return this.id;
  }

  set _id(value: number) {
    this.id = value;
  }

  constructor(_text: string, _id: number) {
    this.completed = false;
    this.editing = false;
    this._id = _id;
    this._text = _text;
  }
}