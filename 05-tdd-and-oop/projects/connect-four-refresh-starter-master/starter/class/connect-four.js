const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {

    let hWinner = this.horizontalWins(grid);
    //  console.log("hWinner: "+hWinner);
      let vWinner =  this.verticalWins(grid);
     // console.log("vWinner: "+vWinner);
      let dDownWinner = this.diagDownWins(grid);
      let dUpWinner = this.diagUpWins(grid);
      let gridFull = this.checkFullGrid(grid);
      let gridEmpty = this.isEmptyGrid(grid);

  if(gridEmpty){
    return false;
  } else if(!gridEmpty && !gridFull && !hWinner && !vWinner && !dDownWinner && !dUpWinner){ 
    return false;
  }else {


      if(hWinner === 'X'){
        return 'X'
      } else if(hWinner === 'O'){
        return 'O';
      }

      if(vWinner === 'X'){
        return 'X'
      } else if(vWinner === 'O'){
        return 'O';
      }

      if(dDownWinner === 'X'){
        return 'X'
      } else if(dDownWinner === 'O'){
        return 'O';
      }

      if(dUpWinner === 'X'){
        return 'X'
      } else if(dUpWinner === 'O'){
        return 'O';
      }

      if(gridFull && !hWinner && !vWinner && !dDownWinner && !dUpWinner){
        return 'T';
      }
  }


  }

  static isEmptyGrid = (grid) => {

    let empty = true;
    grid.forEach(row => {
      row.forEach(cell => {
        if(cell !== ' '){
          empty= false;
        }
      });
    });

    return empty
  }

  static checkFullGrid = (grid) => {
    let full = true;
    grid.forEach(row => {
      row.forEach(cell => {
        if(cell === ' '){
          full= false;
        }
      });
    });
    return full;
  }
  
  static horizontalWins = (grid) => {
    let winner = false;

    for(let i=0; i<grid.length;i++){
      let row = grid[i];

      for(let j=0; j<row.length-3;j++){
        let condition = (row[j] === row[j+1]) &&(row[j] === row[j+2]) &&(row[j] === row[j+3]) && row[j] !== ' ';
        if(condition){
          winner = row[j];
          break;
        }
      }
    }
  
    return winner;
  }

  static verticalWins = (grid) => {
    let winner = false;

    for(let i=0; i<grid.length -3; i++){
      let row = grid[i];
      for(let j =0; j<row.length; j++){
        let condition = (grid[i][j] !== ' ') && (grid[i][j] === grid[i+1][j]) && (grid[i][j] === grid[i+2][j]) && (grid[i][j] === grid[i+3][j]);
        if(condition){
          winner = row[j];
          break;
        }
      }
    }
  
    return winner;
  }

  static diagUpWins = (grid) => {
    let winner = false;

    for(let i=grid.length-1; i>2;i--){
      let row = grid[i];
      for(let j=row.length-3; j>-1;j--){
        let condition = (grid[i][j] !== ' ') && (grid[i][j] === grid[i-1][j+1]) && (grid[i][j] === grid[i-2][j+2]) && (grid[i][j] === grid[i-3][j+3]);
        if(condition){
          winner = row[j];
          break;
        }
      }
    }


    return winner;
  }

  static diagDownWins = (grid) => {
    let winner = false;

    for(let i=0; i<grid.length-3;i++){
      let row = grid[i];
      for(let j=0; j<row.length-3;j++){
        let condition = (grid[i][j] !== ' ') && (grid[i][j] === grid[i+1][j+1]) && (grid[i][j] === grid[i+2][j+2]) && (grid[i][j] === grid[i+3][j+3]);
        if(condition){
          winner = row[j];
          break;
        }
      }
    }


    return winner;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = ConnectFour;
