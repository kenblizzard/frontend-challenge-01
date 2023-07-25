import styled from "styled-components";

export const GameWinnerLayout = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 3rem;
  border: dotted 1px black;
  border-radius: 5px;
  background: rgba(0,0,0,0.05);
  color: green;
`;

export const NextGameButton = styled.button`
    width: 100px;
    padding: 10px;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 10px 0px rgba(0,0,0,0.75);
    }
`;
