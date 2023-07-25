import {
  BoardSizeButton,
  BoardSizeButtonContainer,
  GameOverLayout,
  WinnerBanner,
} from "./styles";

const GameMainMenu = ({
  winner,
  onSelectBoardSize,
}: {
  winner: string;
  onSelectBoardSize: (boardSize: number) => void;
}) => {
  return (
    <GameOverLayout>
      {winner && (
        <WinnerBanner>
          <h1 data-testid="txt-overall-game-winner">
            {winner === "x" ? "Player 1 Wins" : "Player 2 Wins"}
          </h1>
        </WinnerBanner>
      )}
      <h4 data-testid="menu-message">
        Please select board size to start new game
      </h4>
      <BoardSizeButtonContainer>
        <BoardSizeButton
          data-testid="menu-btn-board-size-3"
          onClick={() => onSelectBoardSize(3)}
        >
          3x3
        </BoardSizeButton>
        <BoardSizeButton
          data-testid="menu-btn-board-size-6"
          onClick={() => onSelectBoardSize(6)}
        >
          6x6
        </BoardSizeButton>
        <BoardSizeButton
          data-testid="menu-btn-board-size-9"
          onClick={() => onSelectBoardSize(9)}
        >
          9x9
        </BoardSizeButton>
      </BoardSizeButtonContainer>
    </GameOverLayout>
  );
};

export default GameMainMenu;
