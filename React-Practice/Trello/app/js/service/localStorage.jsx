export const localState = () => {
 try {
   const serializedState = localStore.getItem('board');
   if (serializedState === null) {
     return undefined;
   }
   return JSON.parse(serializedState);
 } catch (err) {
   return undefined;
 }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('board', serializedState); 
  } catch (err) {
     // Ignore write errors
  }
}

export const getBoard = (BoardId) => {
  let persistedBoads = JSON.parse(localStorage.getItem('board') || '[]');
  let boardRs = null;
  let boardId: number;
  persistedBoads.forEach( (board: any) => {
    if (board.boardId === BoardId){
      let ret = new Board(board.boardTitle, board.boardId, board.cards);
      ret.start = board.start;
      boardRs = ret;
    }
  });
}