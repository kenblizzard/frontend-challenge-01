import styled from "styled-components";

export const GameOverLayout = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const BoardSizeButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const BoardSizeButton = styled.button`
  width: 80px;
  padding: 10px;
  cursor: pointer;
`;

export const WinnerBanner = styled.div`
  display: flex;
  padding: 30px;
  margin: 3rem;
  width: 80%;
  justify-content: center;
  border: dotted 1px black;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.05);
  color: green;
`;
