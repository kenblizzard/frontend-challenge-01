import { useEffect, useState } from "react";
import { checkForWinner, initialize2dArray } from "../../util/board-util";
import {
  GameLayout,
  PlayerWinContainer,
  TicTacToeTable,
  TicTacToeTableCell,
  TicTacToeTableRow,
} from "./styles";

import { ReactComponent as OIcon } from "../../assets/o.svg";
import { ReactComponent as XIcon } from "../../assets/x.svg";
import GameTimer from "../GameTimer";

export type BoardCellValues = null | "x" | "o";
export type Coordinates = { row: number; col: number };
export type Winner = {
  winner: null | "x" | "o";
  winningCells: Coordinates[];
} | null;

interface TicTacToeBoardProps {
  boardSize: number;
  player1WinCount: number;
  player2WinCount: number;
  onPlayerWin: (winner: Winner) => void;
  onGameTie: () => void;
  hasWinner: boolean;
  resetBoard: boolean;
  onResetBoard: () => void;
  //   onPlayerMove: () => void;
  //   onPlayerWin: () => string;
}

const TicTacToeBoard = ({
  boardSize,
  player1WinCount,
  player2WinCount,
  hasWinner,
  resetBoard,
  onPlayerWin,
  onResetBoard,
  onGameTie,
}: TicTacToeBoardProps) => {
  const [moveCount, setMoveCount] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<"x" | "o">("o");
  const [winnerCells, setWinnerCells] = useState<Coordinates[]>([]);
  const [boardCells, setBoardCells] = useState<BoardCellValues[][]>(
    initialize2dArray(boardSize)
  );

  useEffect(() => {
    let winner = checkForWinner(boardCells, boardSize);

    if (winner) {
      onPlayerWin(winner);
      setWinnerCells(winner.winningCells);
      return;
    }

    if (moveCount === boardSize * boardSize) {
      onGameTie();
    }
  }, [boardCells]);

  useEffect(() => {
    if (resetBoard) {
      setBoardCells(initialize2dArray(boardSize));
      setWinnerCells([]);
      setCurrentPlayer("o");
      setMoveCount(0);
      onResetBoard();
    }
  }, [resetBoard]);

  const handleClickBoardCell = (x: number, y: number) => {
    if (boardCells[x][y] || hasWinner) {
      return;
    }
    setBoardCells((boardCells) => {
      boardCells[x][y] = currentPlayer === "o" ? "x" : "o";
      let newArray = JSON.parse(JSON.stringify(boardCells));
      return newArray;
    });

    setCurrentPlayer(currentPlayer === "o" ? "x" : "o");
    setMoveCount((moveCount) => moveCount + 1);
  };

  return (
    <GameLayout data-testid="tictactoe-board">
      <PlayerWinContainer>
        <h3>Player 1</h3>
        <span>{player1WinCount}</span>
      </PlayerWinContainer>
      <TicTacToeTable>
        {[...Array(boardSize)].map((item, row) => (
          <TicTacToeTableRow key={`row-${row}`}>
            {[...Array(boardSize)].map((item2, col) => (
              <TicTacToeTableCell
                key={`cell-${row}-${col}`}
                onClick={() => handleClickBoardCell(row, col)}
                $hasFilled={boardCells[row][col]}
                $isWinningLine={winnerCells.find(
                  (cell: Coordinates) => cell.row === row && cell.col === col
                )}
                data-testid={`cell-${row}-${col}`}
              >
                {boardCells[row][col] === "x" && <XIcon />}
                {boardCells[row][col] === "o" && <OIcon />}
              </TicTacToeTableCell>
            ))}
          </TicTacToeTableRow>
        ))}

        <GameTimer status={winnerCells.length > 0 || moveCount === boardSize * boardSize ? "stop-reset" : "start"} />
      </TicTacToeTable>
      <PlayerWinContainer>
        <h3>Player 2</h3>
        <span>{player2WinCount}</span>
      </PlayerWinContainer>
    </GameLayout>
  );
};

export default TicTacToeBoard;
