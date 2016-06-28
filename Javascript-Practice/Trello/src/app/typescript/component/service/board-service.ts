import { Injectable } from 'angular2/core';
import {LabelComment} from '../../model/label-comment';

@Injectable()

export class BoardService {

  private labelItems: LabelComment[];
  
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

  getBoard(name: string) {
    // return Promise.resolve(BOARDS).then(
    //   boards => boards.filter(board => board.name === name)[0]
    // );
  }
}
