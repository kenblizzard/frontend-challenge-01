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
      <h1 data-testid="txt-game-winner">
        {winner === null
          ? "Game is Tie"
          : winner === "x"
          ? "Player 1 Wins"
          : "Player 2 Wins"}
      </h1>
      <NextGameButton data-testid="btn-next-game" onClick={onNextGame}>Next Game</NextGameButton>
    </GameWinnerLayout>
  );
};

export default GameWinner;
