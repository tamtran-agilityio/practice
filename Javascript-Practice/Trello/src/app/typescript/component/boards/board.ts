export class Board {
  private name: string;
  private id: number;
  start: Boolean;

  get title() {
    return this.name;
  }
  set title(value: string) {
    this.name = value;
  }

  set listboard(title: string) {

  }

  constructor(title: string, id: number) {
    this.title = title;
    this.start = false;
    this.id = id;
  }
}
