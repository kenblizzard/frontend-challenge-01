import { checkForWinner, initialize2dArray } from "../util/board-util";

const mock2dArray = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const mock3x3WinForPlayer1Diagonal = [
  ["x", null, "o"],
  [null, "x", null],
  [null, null, "x"],
];

const mock3x3WinForPlayer2DiagonalOpposite = [
  ["x", null, "o"],
  ["x", "o", null],
  ["o", null, "x"],
];

const mock6x6WinForPlayer1Horizontal = [
  ["x", "x", "x", "x", "x", "x"],
  ["o", "o", "o", "o", "o", null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

const mock6x6WinForPlayer2Vertical = [
  ["o", "x", "x", "x", "x", "o"],
  ["o", "x", "x", "x", "x", null],
  ["o", null, null, null, null, null],
  ["o", null, null, null, null, null],
  ["o", null, null, null, null, null],
  ["o", null, null, null, null, null],
];

describe("board-util", () => {
  test("initialize2dArray", () => {
    let dummy2dArray = initialize2dArray(3);

    expect(dummy2dArray).toEqual(mock2dArray);
  });

  test("checkForWinner with 3x3 board in diagonal direction", () => {
    let result = checkForWinner(mock3x3WinForPlayer1Diagonal, 3);

    expect(result.winner).toEqual("x");
    expect(result.winningCells).toEqual([
      { row: 0, col: 0 },
      { row: 1, col: 1 },
      { row: 2, col: 2 },
    ]);
  });

  test("checkForWinner with 3x3 board in opposite diagonal direction", () => {
    let result = checkForWinner(mock3x3WinForPlayer2DiagonalOpposite, 3);

    expect(result.winner).toEqual("o");
    expect(result.winningCells).toEqual([
      { row: 0, col: 2 },
      { row: 1, col: 1 },
      { row: 2, col: 0 },
    ]);
  });

  test("checkForWinner with 3x3 board in opposite diagonal direction", () => {
    let result = checkForWinner(mock3x3WinForPlayer2DiagonalOpposite, 3);

    expect(result.winner).toEqual("o");
    expect(result.winningCells).toEqual([
      { row: 0, col: 2 },
      { row: 1, col: 1 },
      { row: 2, col: 0 },
    ]);
  });

  test("checkForWinner with 6x6 board in vertical direction", () => {
    let result = checkForWinner(mock6x6WinForPlayer1Horizontal, 6);

    expect(result.winner).toEqual("x");
    expect(result.winningCells).toEqual([
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: 2 },
      { row: 0, col: 3 },
      { row: 0, col: 4 },
      { row: 0, col: 5 },
    ]);
  });

  test("checkForWinner with 6x6 board in horizontal direction", () => {
    let result = checkForWinner(mock6x6WinForPlayer2Vertical, 6);

    expect(result.winner).toEqual("o");
    expect(result.winningCells).toEqual([
      { row: 0, col: 0 },
      { row: 1, col: 0 },
      { row: 2, col: 0 },
      { row: 3, col: 0 },
      { row: 4, col: 0 },
      { row: 5, col: 0 },
    ]);
  });
});
