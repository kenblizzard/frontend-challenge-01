import { fireEvent, render, screen } from "@testing-library/react/pure";
import App from "../pages";

describe("TicTacToe App", () => {
  beforeAll(() => {
    render(<App />);
  });

  test("render TicTacToe app initial screen", () => {
    expect(screen.getByTestId("menu-message")).toBeTruthy();
    expect(screen.getByTestId("menu-btn-board-size-3")).toBeTruthy();

    // game stats initial state
    expect(screen.getByTestId("history-0").innerHTML).toBeFalsy();
    expect(screen.getByTestId("history-1").innerHTML).toBeFalsy();
    expect(screen.getByTestId("history-2").innerHTML).toBeFalsy();

    expect(screen.getByTestId("txt-player1-win-percentage").innerHTML).toBe(
      "0 %"
    );
    expect(screen.getByTestId("txt-player1-lose-percentage").innerHTML).toBe(
      "0 %"
    );
    expect(screen.getByTestId("txt-player2-win-percentage").innerHTML).toBe(
      "0 %"
    );
    expect(screen.getByTestId("txt-player2-lose-percentage").innerHTML).toBe(
      "0 %"
    );
  });

  test("shoulder render 3x3 board after selecting 3x3 size optiion", () => {
    fireEvent.click(screen.getByTestId("menu-btn-board-size-3"));

    // check if board has rendered
    expect(screen.getByTestId("tictactoe-board")).toBeTruthy();
    // check if first cell has rendered
    expect(screen.getByTestId("cell-0-0")).toBeTruthy();
    // check if last cell has rendered
    expect(screen.getByTestId("cell-2-2")).toBeTruthy();
  });

  test("click on the first cell, should render 'x' icon", () => {
    let firstCell = screen.getByTestId("cell-0-0");
    fireEvent.click(firstCell);

    expect(firstCell.innerHTML).toEqual("<svg>x.svg</svg>");
  });

  test("other cell should not render 'x' or 'o' icon when not clicked", () => {
    expect(screen.getByTestId("cell-2-2").innerHTML).toBeFalsy();
    expect(screen.getByTestId("cell-1-2").innerHTML).toBeFalsy();
  });

  test("click on the second cell, should render 'o' icon", () => {
    let secondCell = screen.getByTestId("cell-0-1");
    fireEvent.click(secondCell);

    expect(secondCell.innerHTML).toEqual("<svg>o.svg</svg>");
  });

  test("should display winner 'x' after several moves", () => {
    // x
    fireEvent.click(screen.getByTestId("cell-1-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-2-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-2-0"));

    let winnerDisplay = screen.getByTestId("txt-game-winner");
    expect(winnerDisplay.innerHTML).toEqual("Player 1 Wins");
  });

  test("click 'Next Game' btn then the board should reset", () => {
    fireEvent.click(screen.getByTestId("btn-next-game"));

    expect(screen.getByTestId("cell-0-0")).toBeEmptyDOMElement();
    expect(screen.getByTestId("cell-1-0")).toBeEmptyDOMElement();
    expect(screen.getByTestId("cell-2-0")).toBeEmptyDOMElement();
  });

  test("simulate 4 more games to have Player 1 (x) win, should display overall game winner", () => {
    // 2nd game
    // x
    fireEvent.click(screen.getByTestId("cell-0-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-1-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-1-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-2-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-2-0"));
    fireEvent.click(screen.getByTestId("btn-next-game"));

    // 3rd game
    // x
    fireEvent.click(screen.getByTestId("cell-0-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-1-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-1-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-2-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-2-0"));
    fireEvent.click(screen.getByTestId("btn-next-game"));

    // 4th game
    // x
    fireEvent.click(screen.getByTestId("cell-0-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-1-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-1-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-2-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-2-0"));
    fireEvent.click(screen.getByTestId("btn-next-game"));

    // 5th game
    // x
    fireEvent.click(screen.getByTestId("cell-0-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-1-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-1-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-2-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-2-0"));

    // Check is player 1 the game
    expect(screen.getByTestId("txt-overall-game-winner").innerHTML).toBe(
      "Congratulations! Player 1 Wins"
    );
  });

  test("should display game history correctly", () => {
    expect(screen.getByTestId("history-0").innerHTML).toBe("P1");
    expect(screen.getByTestId("history-1").innerHTML).toBe("P1");
    expect(screen.getByTestId("history-2").innerHTML).toBe("P1");
    expect(screen.getByTestId("history-3").innerHTML).toBe("P1");
    expect(screen.getByTestId("history-4").innerHTML).toBe("P1");

    expect(screen.getByTestId("txt-player1-win-percentage").innerHTML).toBe(
      "100 %"
    );
    expect(screen.getByTestId("txt-player1-lose-percentage").innerHTML).toBe(
      "0 %"
    );
    expect(screen.getByTestId("txt-player2-win-percentage").innerHTML).toBe(
      "0 %"
    );
    expect(screen.getByTestId("txt-player2-lose-percentage").innerHTML).toBe(
      "100 %"
    );
  });

  test("start new game and select 6x6 size, should render 6x6 board", () => {
    fireEvent.click(screen.getByTestId("menu-btn-board-size-6"));

    // check if board has rendered
    expect(screen.getByTestId("tictactoe-board")).toBeTruthy();
    // check if first cell has rendered
    expect(screen.getByTestId("cell-0-0")).toBeTruthy();
    // check if last cell has rendered
    expect(screen.getByTestId("cell-5-5")).toBeTruthy();

    // check game stats initial state
    
  });

  test("game stats should reset on new game", () => {
    expect(screen.getByTestId("history-0").innerHTML).toBeFalsy();
    expect(screen.getByTestId("history-1").innerHTML).toBeFalsy();
    expect(screen.getByTestId("history-2").innerHTML).toBeFalsy();

    expect(screen.getByTestId("txt-player1-win-percentage").innerHTML).toBe(
      "0 %"
    );
    expect(screen.getByTestId("txt-player1-lose-percentage").innerHTML).toBe(
      "0 %"
    );
    expect(screen.getByTestId("txt-player2-win-percentage").innerHTML).toBe(
      "0 %"
    );
    expect(screen.getByTestId("txt-player2-lose-percentage").innerHTML).toBe(
      "0 %"
    );
  })

  test("simulate game is tie scenario", () => {
    // x
    fireEvent.click(screen.getByTestId("cell-0-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-0-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-0-1"));
    // o
    fireEvent.click(screen.getByTestId("cell-0-3"));
    // x
    fireEvent.click(screen.getByTestId("cell-0-4"));
    // o
    fireEvent.click(screen.getByTestId("cell-0-5"));

    // x
    fireEvent.click(screen.getByTestId("cell-1-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-1-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-1-1"));
    // o
    fireEvent.click(screen.getByTestId("cell-1-3"));
    // x
    fireEvent.click(screen.getByTestId("cell-1-4"));
    // o
    fireEvent.click(screen.getByTestId("cell-1-5"));

    // x
    fireEvent.click(screen.getByTestId("cell-2-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-2-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-2-1"));
    // o
    fireEvent.click(screen.getByTestId("cell-2-3"));
    // x
    fireEvent.click(screen.getByTestId("cell-2-4"));
    // o
    fireEvent.click(screen.getByTestId("cell-2-5"));

    // x
    fireEvent.click(screen.getByTestId("cell-3-1"));
    // o
    fireEvent.click(screen.getByTestId("cell-3-4"));
    // x
    fireEvent.click(screen.getByTestId("cell-3-2"));
    // o
    fireEvent.click(screen.getByTestId("cell-3-3"));
    // x
    fireEvent.click(screen.getByTestId("cell-3-5"));
    // o
    fireEvent.click(screen.getByTestId("cell-3-0"));

    // x
    fireEvent.click(screen.getByTestId("cell-4-5"));
    // o
    fireEvent.click(screen.getByTestId("cell-4-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-4-1"));
    // o
    fireEvent.click(screen.getByTestId("cell-4-3"));
    // x
    fireEvent.click(screen.getByTestId("cell-4-4"));
    // o
    fireEvent.click(screen.getByTestId("cell-4-0"));

    // x
    fireEvent.click(screen.getByTestId("cell-5-0"));
    // o
    fireEvent.click(screen.getByTestId("cell-5-1"));
    // x
    fireEvent.click(screen.getByTestId("cell-5-3"));
    // o
    fireEvent.click(screen.getByTestId("cell-5-2"));
    // x
    fireEvent.click(screen.getByTestId("cell-5-4"));
    // o
    fireEvent.click(screen.getByTestId("cell-5-5"));

    screen.debug();

    expect(screen.getByTestId("txt-game-winner").innerHTML).toEqual("Game is Tie");
  });
});
