const TTT = require("./ttt");


class ComputerPlayer {

  static getValidMoves(grid) {
    // Your code here
    let moves = [];

  for(let i=0; i<grid.length;i++){
    let row = grid[i];
  //  let moveRow = [];
    
    for(let j=0; j<row.length;j++){
      let gridPos = { };
      if(row[j] === ' '){
        gridPos.row = i;
        gridPos.col = j;
        moves.push(gridPos);
      }
      
    }
    
  }

    return moves;
  }

  static randomMove(grid) {

    let validMoves = this.getValidMoves(grid);
    let length = validMoves.length;

    let index = Math.floor(Math.random() *length);

    return validMoves[index];
  }

  static getWinningMoves(grid, symbol) {

    // Your code here
    // let validMoves = this.getValidMoves(grid);
    // console.log(validMoves);
    // for(let i=0; i<validMoves.length;i++){
    //   let move = validMoves[i];
    //   grid[move.row][move.col] = symbol;
    //   console.log(move);
    //   if(TTT.checkWin(grid) === symbol){
    //     console.log("winning move!");
    //     return move;
    //   } else {
    //     grid[move.row][move.col] = ' ';
    //   }
    // }

  }

  static getSmartMove(grid, symbol) {
    // Your code here
    let opposing = (symbol === 'X') ? 'O' : 'X';
    let validMoves = this.getValidMoves(grid);
    for(let i=0; i<validMoves.length;i++){
      //checks for self win
      let move = validMoves[i];
      grid[move.row][move.col] = symbol;
      let checkWin = TTT.checkWin(grid)
      if(checkWin === symbol){
        return move;
      } else {
        grid[move.row][move.col] = ' ';
      }

      //checks for oposing win
      grid[move.row][move.col] = opposing;
      let checkOpposingWin = TTT.checkWin(grid)
      if(checkOpposingWin === opposing){
        return move;
      } else {
        grid[move.row][move.col] = ' ';
      }
    }
  }

}

module.exports = ComputerPlayer;
