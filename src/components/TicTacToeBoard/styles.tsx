import styled from "styled-components";

export const TicTacToeTable = styled.div`
  display: flex;
  flex-flow: column;
`;

export const TicTacToeTableRow = styled.div`
  display: flex;
`;

interface TicTacToeTableCellProps {
  $hasFilled: string | null;
  $isWinningLine: any
}

export const TicTacToeTableCell = styled.div<TicTacToeTableCellProps>`
  padding: 30px;
  height: 60px;
  width: 60px;
  border: solid 1px black;
  background-color: ${(props) => (props.$isWinningLine ? "#66ff99" : "none")};
  cursor: ${(props) => (!props.$hasFilled ? "pointer" : "not-allowed")};
`;

export const GameLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const PlayerWinContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 50px;
  text-align: center;
`;
