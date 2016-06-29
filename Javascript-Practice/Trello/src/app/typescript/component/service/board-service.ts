import { Injectable } from 'angular2/core';
import {LabelComment} from '../../model/label-comment';
import {Board} from '../../model/board';
@Injectable()

export class BoardService {

  private labelItems: LabelComment[];
  
  getBoards() {
    let board = localStorage.getItem("board-item");
    let temp = JSON.parse(board);
    return Promise.resolve(temp);
  }

  getBoard(boardIdParam) {
    let persistedBoads = JSON.parse(localStorage.getItem('board-item') || '[]');
    let boardRs = null;
    persistedBoads.forEach( (board: any) => {
      if (board.boardId === boardIdParam){
        let ret = new Board(board.boardTitle, board.boardId, board.cards);
        ret.start = board.start;
        boardRs = ret;
      }
    });
    return Promise.resolve(boardRs);
  }

  updateBoard(boardParam: Board){
    let persistedBoads = JSON.parse(localStorage.getItem('board-item') || '[]');
    persistedBoads.forEach( (board: any, idx: number) => {
      if (board.boardId === boardParam.boardId){
        persistedBoads[idx] = boardParam;
      }
    });
    console.log("SSSSSSSSS persistedBoads", persistedBoads);
    // save to localstorage
    localStorage.setItem('board-item', JSON.stringify(persistedBoads));
    return Promise.resolve(persistedBoads);
  }

  getCards() {
    let card = localStorage.getItem("card-item");
    let temp = JSON.parse(card);

    return Promise.resolve(temp);
  }

  getMemberCards() {
    let cardMember = localStorage.getItem("card-member");
    let temp = JSON.parse(cardMember);

    return Promise.resolve(temp);
  }

  getComment() {
    let memberComment = localStorage.getItem("member-comment");
    let temp = JSON.parse(memberComment);

    return Promise.resolve(temp);
  }

  getLabes() {
    let labelItems = [
      {'id':1, 'color':'#61bd4f', 'active':false},
      {'id':2, 'color':'#f2d600', 'active':false},
    {'id':3, 'color':'#ffab4a', 'active':false},
     {'id':4, 'color':'#eb5a46', 'active':false},
      {'id':5, 'color':'#c377e0', 'active':false},
      {'id':6, 'color':'#0079bf', 'active':false}
    ];

    let labelComment = localStorage.getItem("label-comment");
    return Promise.resolve(labelItems);
  }

}
