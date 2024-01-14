const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    this.cursor.setBackgroundColor(0,0,"yellow");

    // Replace this with real commands
   //Screen.addCommand('t', 'test command (remove)', TTT.testCommand);
      Screen.addCommand("z", "Move cursor left", TTT.moveLeft);
      Screen.addCommand("c", "Move cursor right", TTT.moveRight);
  //  Screen.addCommand("a", "Move cursor up", this.cursor.up);
  //  Screen.addCommand("x", "Move cursor down", this.cursor.down);

   Screen.render();
  }


  // Remove this
  // static testCommand() {
  //   console.log("TEST COMMAND");
  // }
  static moveLeft(){
   this.cursor = new Cursor(3, 3);
    let row = this.cursor.row;
    let col = this.cursor.col;

    console.log("col before: "+ col);
    this.cursor.left();
    
    console.log("col after: "+ col);
    
    Screen.setBackgroundColor(row, col+1, "black")
    Screen.setBackgroundColor(row, col, "green")
  }

  static moveRight() {
   this.cursor = new Cursor(3, 3);
   let row = this.cursor.row;
   let col = this.cursor.col;

   console.log("col before: "+ col);
   this.cursor.right();
   
   console.log("col after: "+ col);
    Screen.setBackgroundColor(row, col-1, "black")
    Screen.setBackgroundColor(row, col, "green")
  }

  static checkWin(grid) {

       let hWinner = this.horizontalWins(grid);
      //  console.log("hWinner: "+hWinner);
        let vWinner =  this.verticalWins(grid);
       // console.log("vWinner: "+vWinner);
        let dWinner = this.diagonalWins(grid);
      //  console.log("dWinner: "+dWinner);
        let gridFull = this.checkFullGrid(grid);
        let gridEmpty = this.isEmptyGrid(grid);

    if(gridEmpty){
      return false;
    } else if(!gridEmpty && !gridFull && !hWinner && !vWinner && !dWinner){ 
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

        if(dWinner === 'X'){
          return 'X'
        } else if(dWinner === 'O'){
          return 'O';
        }

        if(gridFull && !hWinner && !vWinner && !dWinner){
          return 'T';
        }
    }

    

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
        
        if((row[0] === row[1]) &&(row[1] === row[2]) && row[0] !== ' ' ){
          winner = row[0];
          break;
        }
    }
  
    return winner;
  }

  static verticalWins = (grid) => {
    let winner = false;

    let row = grid[0];

    for(let j=0; j<row.length; j++){
      
      if(row[j] !== ' ' && (grid[0][j] === grid[1][j]) && (grid[1][j] === grid[2][j])){
        winner = row[j];
        break;
      }
    }
  
    return winner;
  }

  static diagonalWins = (grid) => {
    let winner = false;

    let diag1 = grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2];
    let diag2 = grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0];

    if((grid[0][0] !== ' ' &&diag1) || (grid[0][2] !==' ' && diag2) ){
      winner = grid[1][1];
    }


    return winner;
  }

}

module.exports = TTT;

