export function startGame() {
  const goblin = document.createElement("div");
  goblin.classList.add("goblin");
  const board = document.querySelector(".game-board");
  board.appendChild(goblin);

  setInterval(() => {
    moveGoblin(board, goblin);
  }, 1000);
}

function moveGoblin(board, goblin) {
  const emptyCells = Array.from(board.children).filter(
    (cell) => !cell.hasChildNodes()
  );
  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  randomCell.appendChild(goblin);
}
