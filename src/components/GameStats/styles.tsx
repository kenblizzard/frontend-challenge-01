import styled from "styled-components";

export const GameStatsLayout = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  margin-top: 3rem;
`;

export const GameHistoryLayout = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;

  @media (max-width: 1024px) {
    flex-flow: column;
  }
`;

export const GameHistoryContent = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  text-align: center;
`;
export const PlayerVictoriesWrapper = styled.div`
  display: flex;
  flex-flow: row;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`;

interface WinPercentageProps {
  type: 'win' | 'lose'
}

export const WinPercentage = styled.div<WinPercentageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(0,0,0,0.05);
  font-weight: bold;

  border: ${props => props.type === 'win' ? 'solid 1px green' : 'solid 1px red'}

`;

export const RowLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ColumnLayout = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

interface GamesPlayedDotProps {
  played: boolean;
}
export const GamesPlayedDot = styled.div<GamesPlayedDotProps>`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${(props) => (props.played ? "green" : "gray")};
`;

export const GamesHistoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid black;
`;
