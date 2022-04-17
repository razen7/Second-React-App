// Part 1: Create a function hasXWon which takes in a TicTacToe board and returns true if X has won otherwise false

// example board
let board = [
    ['X', 'O', undefined],
    ['O', 'X', 'O'],
    [undefined, 'O', undefined]
]

board = [
    ['O', undefined, 'O'],
    [undefined, 'O', 'X'],
    [undefined, 'X', 'O']
]

console.log(hasOWon(board));
// console.log(ticTacToeGameStatus(board));

function hasXWon(board) {
    // check row
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let c = 0; c < row.length; c++) {
            const move = row[c];
            if (move === 'X') {
                if (c === row.length - 1) return true;
            } else {
                i = board.length;
                break;
            }
        }
    }

    // check columns
    for (let c = 0; c < board.length; c++) {
        for (let r = 0; r < board.length; r++) {
            const move = board[r][c];
            if (move === 'X') {
                if (r === board.length - 1) return true;
            } else {
                break;
            }
        }

    }

    // left to right diagonal
    for (let r = 0; r < board.length; r++) {
        const move = board[r][r];
        if (move === 'X') {
            if (r === board.length - 1) return true;
        } else {
            c = board.length;
            break;
        }
    }

    // right to left diagonal
    for (let i = 0; i < board.length; i++) {
        for (let c = board[i].length - 1; c > -1; c--) {
            const move = board[i][c];
            i++;
            if (move === 'X') {
                if (c === 0) return true;
            } else {
                i = board.length;
                break;
            }
        }
    }

    return false;
}

function hasOWon(board) {
    // check row
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let c = 0; c < row.length; c++) {
            const move = row[c];
            if (move === 'O') {
                if (c === row.length - 1) return true;
            } else {
                i = board.length;
                break;
            }
        }
    }

    // check columns
    for (let c = 0; c < board.length; c++) {
        for (let r = 0; r < board.length; r++) {
            const move = board[r][c];
            if (move === 'O') {
                if (r === board.length - 1) return true;
            } else {
                break;
            }
        }

    }

    // left to right diagonal
    for (let r = 0; r < board.length; r++) {
        const move = board[r][r];
        if (move === 'O') {
            if (r === board.length - 1) return true;
        } else {
            c = board.length;
            break;
        }
    }

    // right to left diagonal
    for (let i = 0; i < board.length; i++) {
        for (let c = board[i].length - 1; c > -1; c--) {
            const move = board[i][c];
            i++;
            if (move === 'O') {
                if (c === 0) return true;
            } else {
                i = board.length;
                break;
            }
        }
    }

    return false;
}

function ticTacToeGameStatus(board) {
    if (hasXWon(board))
        return `Player X has won`
    else if (hasOWon(board))
        return `Player O has won`
    else {
        if (board.every(v => {
            return v.every(ele => ele === 'X' || ele === 'O')
        })) {
            return `Game is drawn`
        } else
            return `Game in progress`
    }

}
