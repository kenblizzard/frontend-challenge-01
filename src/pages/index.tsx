import { useEffect, useState } from "react";
import TicTacToeBoard, {
  Winner,
} from "../components/TicTacToeBoard/TicTacToeBoard";
import GameWinner from "../components/GameWinner";
import GameOver from "../components/GameOver";
import GameStats from "../components/GameStats";

interface Games {
  winner: null | "x" | "o";
}
const TikTacToeApp = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [boardSize, setBoardSize] = useState<number>(0);
  const [hasWinner, setHasWinner] = useState<"x" | "o" | null>(null);
  const [isGameTie, setGameTie] = useState<boolean>(false);
  const [resetBoard, setResetBoard] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(true);

  useEffect(() => {
    const player1Wins = games.filter(({ winner }) => winner === "x").length;

    if (player1Wins === 5) {
      setIsGameOver(true);
      setBoardSize(0);
      return;
    }
    const player2Wins = games.filter(({ winner }) => winner === "o").length;
    if (player2Wins === 5) {
      setIsGameOver(true);
      setBoardSize(0);
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
    setHasWinner(null);
    setGames([]);
  };

  const getGameTimerStatus = () => {
    if (hasWinner || isGameTie) {
      return "stop";
    } else if (isGameOver) {
      return "reset";
    } else if (!isGameOver) {
      return "start";
    }

    return "reset";
  };
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>Tic Tac Toe Game</h2>
      {isGameOver && (
        <GameOver winner="x" onSelectBoardSize={handleSelectBoardSize} />
      )}
      {!isGameOver && (
        <>
          {(hasWinner || isGameTie) && (
            <GameWinner winner={hasWinner} onNextGame={handleNextGame} />
          )}
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
        </>
      )}
      <GameStats games={games} gameTimerStatus={getGameTimerStatus()} />
    </div>
  );
};

export default TikTacToeApp;
