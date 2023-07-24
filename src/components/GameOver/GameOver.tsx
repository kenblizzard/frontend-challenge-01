import {
  BoardSizeButton,
  BoardSizeButtonContainer,
  GameOverLayout,
} from "./styles";

const GameOver = ({
  winner,
  onSelectBoardSize,
}: {
  winner: string;
  onSelectBoardSize: (boardSize: number) => void;
}) => {
  return (
    <GameOverLayout>
      {<h3>{winner === "x" ? "Player 1 Wins" : "Player 2 Wins"}</h3>}
      <h4>Please select board size to start new game</h4>
      <BoardSizeButtonContainer>
        <BoardSizeButton onClick={() => onSelectBoardSize(3)}>
          3x3
        </BoardSizeButton>
        <BoardSizeButton onClick={() => onSelectBoardSize(7)}>
          6x6
        </BoardSizeButton>
        <BoardSizeButton onClick={() => onSelectBoardSize(9)}>
          9x9
        </BoardSizeButton>
      </BoardSizeButtonContainer>
    </GameOverLayout>
  );
};

export default GameOver;
