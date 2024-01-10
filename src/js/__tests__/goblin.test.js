import { startGame, moveGoblin } from "../goblin";
import Board from "../board";

describe("start game", () => {
  let board;

  beforeEach(() => {
    document.body.innerHTML = '<div class="game-board"></div>';
    board = new Board(4);
    board.createBoard();
  });

  test("adds a goblin to the board", () => {
    startGame();
    expect(document.querySelector(".goblin")).toBeTruthy();
  });

  test("moves goblin to an empty cell", () => {
    const goblin = document.createElement("div");
    goblin.classList.add("goblin");
    board.cells[0].appendChild(goblin);

    moveGoblin(board.boardElement, goblin);

    expect(board.cells[0].contains(goblin)).toBeFalsy();
    expect(document.querySelector(".goblin")).toBeTruthy();
  });
});
