/*
 *  Create handle service
 *  Get data to local storage 
 */
import { Injectable } from 'angular2/core';
import {LabelComment} from '../../model/label-comment';
import {Board} from '../../model/board';
import {CardMember} from '../../model/card-member';

@Injectable()

export class BoardService {

  private labelItems: LabelComment[];
  
  getBoards() {
    let board = localStorage.getItem("board-item");
    let temp = JSON.parse(board);
    return Promise.resolve(temp);
  }

  /*
   * Get data part board
   * @param  boardIdParam infor dashboard init
  */
  getBoard(boardIdParam) {
    let persistedBoads = JSON.parse(localStorage.getItem('board-item') || '[]');
    let boardRs = null;
    let boardId: number;
    persistedBoads.forEach( (board: any) => {
      if (board.boardId === boardIdParam){
        let ret = new Board(board.boardTitle, board.boardId, board.cards);
        ret.start = board.start;
        boardRs = ret;
      }
    });
    return Promise.resolve(boardRs);
  }

   /*
   * Set data part board
   * @param  boardIdParam infor dashboard init
  */
  updateBoard(boardParam: Board){
    let boardId: number;
    let persistedBoads = JSON.parse(localStorage.getItem('board-item') || '[]');
    let found = false;
    persistedBoads.forEach( (board: any, idx: number) => {
      if (board.boardId === boardParam.boardId){
        persistedBoads[idx] = boardParam;
        found = true;
      }
    });
    if (!found){
      persistedBoads.push(boardParam);
    }

    // save to localstorage
    localStorage.setItem('board-item', JSON.stringify(persistedBoads));
    return Promise.resolve(persistedBoads);
  }

  /*
   * Get data part labels
  */
  getLabes() {
    let labelComment = localStorage.getItem("label-comment");
    let labelItems = [
      {'labelId':1, 'labelColor':'#61bd4f', 'active':false},
      {'labelId':2, 'labelColor':'#f2d600', 'active':false},
      {'labelId':3, 'labelColor':'#ffab4a', 'active':false},
      {'labelId':4, 'labelColor':'#eb5a46', 'active':false},
      {'labelId':5, 'labelColor':'#c377e0', 'active':false},
      {'labelId':6, 'labelColor':'#0079bf', 'active':false}
    ];
    if (labelComment == null) {
      localStorage.setItem('label-comment', JSON.stringify(labelItems));
    }
    
    let temp = JSON.parse(labelComment);
    return Promise.resolve(temp);
  }

}
