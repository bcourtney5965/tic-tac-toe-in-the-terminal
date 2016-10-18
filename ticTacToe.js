var Board = function() {
  this.arr = Array(9).fill(" ");
  this.players = ['player1', 'player2'];
  this.turn = 'player1';
  this.displayedBoard = `${this.arr[0]}|${this.arr[1]}|${this.arr[2]}\n------\n${this.arr[3]}|${this.arr[4]}|${this.arr[5]}\n------\n${this.arr[6]}|${this.arr[7]}|${this.arr[8]}\n\nTurn:${this.turn} \n`;
}

Board.prototype.showBoard = function() {
  // console.log(`this.arr = ${this.arr}`);
  console.log(this.displayedBoard);
}

Board.prototype.makeMove = function(cell) {
  if (cell < 0 || cell > 9) {
    console.log("please provide a number greater than 0 and less than 10");
  } else if (this.turn === 'player1') {
    this.arr[cell - 1] = "X";
  } else {
    this.arr[cell - 1] = "O";
  }
  this.turn = (this.turn === 'player1') ? 'player2' : 'player1'; 
}

Board.prototype.hasWon = function(symbol) {
  //Horizonals
  if (this.arr[0] === this.arr[1] === this.arr[2]) {
    return (this.arr[1] === "X") ? "Player1 has won" : "Player2 has won";
  } else if (this.arr[3] === this.arr[4] === this.arr[5]) {
    return (this.arr[4] === "X") ? "Player1 has won" : "Player2 has won";
  } else if (this.arr[6] === this.arr[7] === this.arr[8]) {
    return (this.arr[7] === "X") ? "Player1 has won" : "Player2 has won";
  // Verticals
  } else if (this.arr[0] === this.arr[3] === this.arr[6]) {
    return (this.arr[6] === "X") ? "Player1 has won" : "Player2 has won";
  } else if (this.arr[1] === this.arr[4] === this.arr[7]) {
    return (this.arr[4] === "X") ? "Player1 has won" : "Player2 has won";
  } else if (this.arr[2] === this.arr[5] === this.arr[8]) {
    return (this.arr[5] === "X") ? "Player1 has won" : "Player2 has won";
  // diagonals
  } else if (this.arr[0] === this.arr[4] === this.arr[8]) {
    return (this.arr[4] === "X") ? "Player1 has won" : "Player2 has won";
  } else if (this.arr[2] === this.arr[4] === this.arr[6]) {
    return (this.arr[4] === "X") ? "Player1 has won" : "Player2 has won";
  }
}

Board.prototype.playGame = function() {
  this.hasWon();
  this.showBoard();
  this.makeMove();
}

var myBoard = new Board();
console.log(myBoard.playGame());


