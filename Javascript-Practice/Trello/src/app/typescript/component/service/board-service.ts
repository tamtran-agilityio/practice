import { Injectable } from 'angular2/core';

import { BOARDS }     from '../boards/mock-boards';

@Injectable()

export class BoardService {
  getBoards() {
    return Promise.resolve(BOARDS);
  }

  getBoard(name: string) {
    return Promise.resolve(BOARDS).then(
      boards => boards.filter(board => board.name === name)[0]
    );
  }
}
