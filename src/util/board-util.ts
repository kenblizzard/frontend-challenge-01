import { BoardCellValues, Winner } from "../components/TicTacToeBoard/TicTacToeBoard";

export const initialize2dArray = (size: number): BoardCellValues[][] => {
    let tempArray: BoardCellValues[][] = new Array(size).fill(null)
        .map(() =>
            new Array(size).fill(null)
        );

    return tempArray
}

export const checkForWinner = (boardCells: BoardCellValues[][], boardSize: number): Winner => {

    let winningCells = []
    let firstMove = boardCells[0][0];
    // diagonal
    for (let row = 0; row < boardSize; row++) {
        if (!firstMove) {
            break;
        }
        let hasWinner = true
        winningCells.push({  row, col: row })
        if (boardCells[row][row] !== firstMove) {
            hasWinner = false
            winningCells = []
        }

        if (hasWinner && winningCells.length === boardSize) {
            return {
                winner: firstMove,
                winningCells
            }
        }
    }

    winningCells = []
    firstMove = boardCells[0][boardSize - 1];
    for (let row = 0; row < boardSize; row++) {
        if (!firstMove) {
            break;
        }
        let hasWinner = true
        winningCells.push({ row, col: boardSize - row - 1 })

        if (boardCells[row][boardSize - row - 1] !== firstMove) {
            hasWinner = false
            winningCells = []
        }

        if (hasWinner && winningCells.length === boardSize) {
            return {
                winner: firstMove,
                winningCells
            }
        }
    }

    //vertical and horizontal
    for (let row = 0; row < boardSize; row++) {

        let firstMove = boardCells[row][0];
        if (firstMove) {
            let hasWinner = true
            let winningCells = []
            for (let col = 0; col < boardSize; col++) {
                winningCells.push({ row, col })

                if (boardCells[row][col] !== firstMove) {
                    hasWinner = false
                    winningCells = []
                }
            }

            if (hasWinner) {
                return {
                    winner: firstMove,
                    winningCells
                }
            }
        }


        firstMove = boardCells[0][row];
        if (firstMove) {
            let hasWinner = true
            let winningCells = []
            for (let col = 0; col < boardSize; col++) {
                winningCells.push({ row: col, col: row })

                if (boardCells[col][row] !== firstMove) {
                    hasWinner = false
                }
            }

            if (hasWinner) {
                return {
                    winner: firstMove,
                    winningCells
                }
            }
        }
    }

    return null
}