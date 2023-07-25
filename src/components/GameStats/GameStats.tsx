import GameTimer from "../GameTimer";
import {
  ColumnLayout,
  GameHistoryContent,
  GameHistoryLayout,
  GameStatsLayout,
  GamesHistoryBox,
  GamesPlayedDot,
  PlayerVictoriesWrapper,
  RowLayout,
  WinPercentage,
} from "./styles";

const GameStats = ({
  games,
  gameTimerStatus,
}: {
  games: any[];
  gameTimerStatus: string;
}) => {
  let player1Wins = games.filter(({ winner }) => winner === "x").length;
  let player2Wins = games.filter(({ winner }) => winner === "o").length;
  let player1WinPercentage = `${(
    (player1Wins / (player1Wins + player2Wins)) * 100 || 0
  ).toFixed(0)} %`;
  let player2WinPercentage = `${(
    (player2Wins / (player1Wins + player2Wins)) * 100 || 0
  ).toFixed(0)} %`;
  return (
    <GameStatsLayout>
      <h2>STATS</h2>
      <GameHistoryLayout>
        <GameHistoryContent>
          <h3>Victories %</h3>
          <PlayerVictoriesWrapper>
            <ColumnLayout>
              PLAYER 1
              <RowLayout>
                <ColumnLayout>
                  <WinPercentage type="win" data-testid="txt-player1-win-percentage">
                    {player1WinPercentage}
                  </WinPercentage>
                  <span>V</span>
                </ColumnLayout>
                <ColumnLayout>
                  <WinPercentage type="lose" data-testid="txt-player1-lose-percentage">
                    {player2WinPercentage}
                  </WinPercentage>
                  <span>L</span>
                </ColumnLayout>
              </RowLayout>
            </ColumnLayout>
            <ColumnLayout>
              PLAYER 2
              <RowLayout>
                <ColumnLayout>
                  <WinPercentage type="win" data-testid="txt-player2-win-percentage">
                    {player2WinPercentage}
                  </WinPercentage>
                  <span>V</span>
                </ColumnLayout>
                <ColumnLayout>
                  <WinPercentage type="lose" data-testid="txt-player2-lose-percentage">
                    {player1WinPercentage}
                  </WinPercentage>
                  <span>L</span>
                </ColumnLayout>
              </RowLayout>
            </ColumnLayout>
          </PlayerVictoriesWrapper>
        </GameHistoryContent>
        <GameHistoryContent>
          <ColumnLayout>
            <h3>Played Games</h3>
            <RowLayout>
              {[...Array(9)].map((item, index) => (
                <GamesPlayedDot
                  key={`gamesplayed-${index}`}
                  data-testid={`gamesplayed-${index}`}
                  played={index < games.length}
                />
              ))}
            </RowLayout>
          </ColumnLayout>

          <ColumnLayout>
            <h3>Games History</h3>
            <RowLayout>
              {[...Array(9)].map((item, index) => (
                <GamesHistoryBox
                  key={`history-${index}`}
                  data-testid={`history-${index}`}
                >
                  {!games[index]
                    ? ""
                    : games[index].winner === "x"
                    ? "P1"
                    : "P2"}
                </GamesHistoryBox>
              ))}
            </RowLayout>
          </ColumnLayout>
        </GameHistoryContent>
      </GameHistoryLayout>
      <ColumnLayout>
        <h3>Total play time</h3>
        <GameTimer status={gameTimerStatus as "stop" | "start" | "reset"} />
      </ColumnLayout>
    </GameStatsLayout>
  );
};

export default GameStats;
