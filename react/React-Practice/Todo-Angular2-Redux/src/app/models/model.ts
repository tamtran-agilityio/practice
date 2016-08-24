export interface TodoAction {
  type: string;
  id: number;
  name?: string;
}

export class Todo {
  private _name: string;
  completed: boolean;
  editing: boolean;

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value.trim() || '';
  }

  constructor(name: string) {
    this.completed = false;
    this.editing = false;
    this.name = name.trim();
  }
}