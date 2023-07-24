import React, { useEffect, useState } from "react";
import TicTacToeBoard, {
  Winner,
} from "../components/TicTacToeBoard/TicTacToeBoard";
import GameWinner from "../components/GameWinner";
import GameOver from "../components/GameOver";

interface Games {
  winner: null | "x" | "o";
}
const TikTacToeApp = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [boardSize, setBoardSize] = useState<number>(3);
  const [hasWinner, setHasWinner] = useState<"x" | "o" | null>(null);
  const [isGameTie, setGameTie] = useState<boolean>(false);
  const [resetBoard, setResetBoard] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(true);

  useEffect(() => {
    const player1Wins = games.filter(({ winner }) => winner === "x").length;

    if (player1Wins === 5) {
      setIsGameOver(true);
      return;
    }
    const player2Wins = games.filter(({ winner }) => winner === "o").length;
    if (player2Wins === 5) {
      setIsGameOver(true);
      return;
    }
  }, [games]);

  const handlePlayerWin = (winner: Winner) => {
    games.push({ winner: winner!.winner });

    let updatedGames = games.concat();

    setGames(updatedGames);
    setHasWinner(winner!.winner);
  };

  const handleNextGame = () => {
    setHasWinner(null);
    setGameTie(false);
    setResetBoard(true);
  };

  const handleResetBoard = () => {
    setResetBoard(false);
  };

  const handleGameTie = () => {
    setGameTie(true);
    setHasWinner(null);
    setHasWinner(null);
  };

  const handleSelectBoardSize = (boardSize: number) => {
    setBoardSize(boardSize);
    setIsGameOver(false);
    setGames([]);
  };
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>Tic Tac Toe Game</h2>
      {isGameOver && (
        <GameOver winner="x" onSelectBoardSize={handleSelectBoardSize} />
      )}
      {!isGameOver && (
        <>
          <TicTacToeBoard
            boardSize={boardSize}
            player1WinCount={
              games.filter(({ winner }) => winner === "x").length
            }
            player2WinCount={
              games.filter(({ winner }) => winner === "o").length
            }
            hasWinner={Boolean(hasWinner)}
            resetBoard={resetBoard}
            onResetBoard={handleResetBoard}
            onGameTie={handleGameTie}
            onPlayerWin={handlePlayerWin}
          />
          {(hasWinner || isGameTie) && (
            <GameWinner winner={hasWinner} onNextGame={handleNextGame} />
          )}
        </>
      )}
    </div>
  );
};

export default TikTacToeApp;
