export default class Store {
  static getItemFromStore(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]');
  }

  static updateItemToStore(name: string, item: string) {
    localStorage.setItem(name, item);
  }
}