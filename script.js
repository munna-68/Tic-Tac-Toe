let gameBord = ["Y", "Y", "Y", "", "", "", "", "", ""]
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
    console.log("winner is X")
  } if (winningIndexes.row1.every(i => arr[i] === "Y") ||
  winningIndexes.row2.every(i => arr[i] === "Y") ||
  winningIndexes.row3.every(i => arr[i] === "Y") ||
  winningIndexes.col1.every(i => arr[i] === "Y") ||
  winningIndexes.col2.every(i => arr[i] === "Y") ||
  winningIndexes.col3.every(i => arr[i] === "Y") ||
  winningIndexes.diag1.every(i => arr[i] === "Y")||
  winningIndexes.diag2.every(i => arr[i] === "Y")
) {
  console.log("winner is Y")
  
} }

playTic(gameBord)