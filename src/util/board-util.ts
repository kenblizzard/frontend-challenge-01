import { BoardCell, Winner } from "../components/TicTacToeBoard/TicTacToeBoard";

export const initialize2dArray = (size: number): BoardCell[][] => {
    let tempArray: BoardCell[][] = new Array(size).fill(null)
        .map(() =>
            new Array(size).fill(null)
        );

    return tempArray
}

export const checkForWinner = (boardCells: BoardCell[][], boardSize: number): Winner => {

    let winningCells = []
    let firstMove = boardCells[0][0];
    // diagonal
    for (let x = 0; x < boardSize; x++) {
        if (!firstMove) {
            break;
        }
        let hasWinner = true
        winningCells.push({ x, y: x })
        if (boardCells[x][x] !== firstMove) {
            hasWinner = false
            winningCells = []
        }

        if (hasWinner && winningCells.length === boardSize) {
            console.log('1')
            return {
                winner: firstMove,
                winningCells
            }
        }
    }

    winningCells = []
    firstMove = boardCells[0][boardSize - 1];
    for (let x = 0; x < boardSize; x++) {
        if (!firstMove) {
            break;
        }
        let hasWinner = true
        winningCells.push({ x, y: boardSize - x - 1 })

        if (boardCells[x][boardSize - x - 1] !== firstMove) {
            hasWinner = false
            winningCells = []
        }

        if (hasWinner && winningCells.length === boardSize) {
            console.log('2')
            return {
                winner: firstMove,
                winningCells
            }
        }
    }

    //vertical and horizontal
    for (let x = 0; x < boardSize; x++) {

        let firstMove = boardCells[x][0];
        if (firstMove) {
            let hasWinner = true
            let winningCells = []
            for (let y = 0; y < boardSize; y++) {
                winningCells.push({ x, y })

                if (boardCells[x][y] !== firstMove) {
                    hasWinner = false
                    winningCells = []
                }
            }

            if (hasWinner) {
                console.log('3')
                return {
                    winner: firstMove,
                    winningCells
                }
            }
        }


        firstMove = boardCells[0][x];
        if (firstMove) {
            let hasWinner = true
            let winningCells = []
            for (let y = 0; y < boardSize; y++) {
                winningCells.push({ x: y, y: x })

                if (boardCells[y][x] !== firstMove) {
                    hasWinner = false
                }
            }

            if (hasWinner) {
                console.log('4')
                return {
                    winner: firstMove,
                    winningCells
                }
            }
        }
    }

    return null
}