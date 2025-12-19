let gameBord = ["", "", "", "", "", "", "", "", ""]
let winningIndexes = {
  row1:  [0, 1, 2],
  row2:  [3, 4, 5],
  row3:  [6, 7, 8],
  col1:  [0, 3, 6],
  col2:  [1, 4, 7],
  col3:  [2, 5, 8],
  diag1: [0, 4, 8],
  diag2: [2, 4, 6]
}


const gameBordCell = document.querySelectorAll('.cell')
const winningText =  document.querySelector('.winning-text')


let clickCounter = 1;
let currentPlayer;
let gameOver;

function checkCurrentPlayer() {
  if (clickCounter % 2 === 0) {
  currentPlayer = "Y"
} else {
  currentPlayer = "X"
}
}


gameBordCell.forEach( cell => { cell.addEventListener("click", () => {
  if (gameOver) return;
  cell.classList.toggle('selected');
  checkCurrentPlayer()
  cell.textContent = currentPlayer;
  clickCounter++
  let textContent = cell.textContent;
  let id = cell.id;
  updateGameBoard(textContent, id);
  playTic(gameBord)
  console.log(gameBord)
})});

function updateGameBoard(textContent, id) {
  if(id === "cell-1-1"){
    gameBord[0] = textContent;
  }
  if(id === "cell-1-2"){
    gameBord[1] = textContent;
  }
  if(id === "cell-1-3"){
    gameBord[2] = textContent;
  }
  if(id === "cell-2-1"){
    gameBord[3] = textContent;
  }
  if(id === "cell-2-2"){
    gameBord[4] = textContent;
  }
  if(id === "cell-2-3"){
    gameBord[5] = textContent;
  }
  if(id === "cell-3-1"){
    gameBord[6] = textContent;
  }
  if(id === "cell-3-2"){
    gameBord[7] = textContent;
  }
  if(id === "cell-3-3"){
    gameBord[8] = textContent;
  }
}



function playTic(arr) {
  if(winningIndexes.row1.every(i => arr[i] === "X") ||
  winningIndexes.row2.every(i => arr[i] === "X") ||
  winningIndexes.row3.every(i => arr[i] === "X") ||
  winningIndexes.col1.every(i => arr[i] === "X") ||
  winningIndexes.col2.every(i => arr[i] === "X") ||
  winningIndexes.col3.every(i => arr[i] === "X") ||
  winningIndexes.diag1.every(i => arr[i] === "X")||
  winningIndexes.diag2.every(i => arr[i] === "X")
  ) {
    winningText.textContent = "winner is X";
    gameOver = 1
  } if (winningIndexes.row1.every(i => arr[i] === "Y") ||
  winningIndexes.row2.every(i => arr[i] === "Y") ||
  winningIndexes.row3.every(i => arr[i] === "Y") ||
  winningIndexes.col1.every(i => arr[i] === "Y") ||
  winningIndexes.col2.every(i => arr[i] === "Y") ||
  winningIndexes.col3.every(i => arr[i] === "Y") ||
  winningIndexes.diag1.every(i => arr[i] === "Y")||
  winningIndexes.diag2.every(i => arr[i] === "Y")
) {
  winningText.textContent = "winner is Y";
  gameOver = 1
} }

