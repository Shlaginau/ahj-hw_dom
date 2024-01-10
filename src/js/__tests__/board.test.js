import Board from "../board";

describe("Board", () => {
  let board;
  const size = 4;

  beforeEach(() => {
    document.body.innerHTML = '<div class="game-board"></div>';
    board = new Board(size);
  });

  test("creates a board with correct number of cells", () => {
    board.createBoard();
    expect(board.cells.length).toBe(size * size);
    expect(board.boardElement.children.length).toBe(size * size);
  });
});
