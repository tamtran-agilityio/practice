import { Injectable } from 'angular2/core';

@Injectable()

export class BoardService {
  getBoards() {
    let board = localStorage.getItem("board-item");
    let temp = JSON.parse(board);

    return Promise.resolve(temp);
  }

  getCards() {
    let card = localStorage.getItem("card-item");
    let temp = JSON.parse(card);

    return Promise.resolve(temp);
  }

  getBoard(name: string) {
    // return Promise.resolve(BOARDS).then(
    //   boards => boards.filter(board => board.name === name)[0]
    // );
  }
}
