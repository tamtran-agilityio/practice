export interface TodoAction {
  type: string;
  id: number;
  name?: string;
}

export class Todo {
  private _name: string;
  private _id: number;
  completed: boolean;
  editing: boolean;

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value.trim() || '';
  }

  get id() {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  constructor(name: string, id: number) {
    this.completed = false;
    this.editing = false;
    this.id = id;
    this.name = name.trim();
  }
}