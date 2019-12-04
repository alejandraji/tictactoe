let gameOver = false;
if (confirm("Does X want to go first?") == true) {
  var player = "X";
} else {
  var player = "O";
}

let squares = new Array();
squares[0] = 0;
squares[1] = 1;
squares[2] = 2;
squares[3] = 3;
squares[4] = 4;
squares[5] = 5;
squares[6] = 6;
squares[7] = 7;
squares[8] = 8;

let winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function clear() {
  for (let i = 1; i < squares.length; i++) {
    let buttonTic = "sqr" + i;
  }

  squares = [];
  gameOver = false;
}

function squareClick(square) {
  let sqElem = document.getElementById(square).value;

  let parseSq = parseInt(square.substring(3, 4)) - 1;
  if (sqElem === "") {
    console.log("click working");
    document.getElementById(square).value = player;
    squares[parseSq] = player;
  }
  checkForWinner("X");
  checkForWinner("O");

  if (player == "O") {
    player = "X";
  } else {
    player = "O";
  }
}

function playAgain() {
  let response = confirm("play again?!");
  if (response == true) {
  } else {
    alert("see you next time!");
  }
}

function checkForWinner(value) {
  for (let i = 0; i < winCombos.length; i++) {
    if (
      squares[winCombos[i][0]] == value &&
      squares[winCombos[i][1]] == value &&
      squares[winCombos[i][2]] == value
    ) {
      alert(value + " gano el juego");
      gameOver = true;
    }
  }
  if (gameOver == true) {
    playAgain();
  } else {
    return " next player is up";
  }
}
