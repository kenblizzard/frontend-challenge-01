import { GameWinnerLayout, NextGameButton } from "./styles";

const GameWinner = ({
  winner,
  onNextGame,
}: {
  winner: "x" | "o" | null;
  onNextGame: () => void;
}) => {
  return (
    <GameWinnerLayout>
      <h1>
        {winner === null
          ? "Game is Tie"
          : winner === "x"
          ? "Player 1 Wins"
          : "Player 2 Wins"}
      </h1>
      <NextGameButton onClick={onNextGame}>Next Game</NextGameButton>
    </GameWinnerLayout>
  );
};

export default GameWinner;
