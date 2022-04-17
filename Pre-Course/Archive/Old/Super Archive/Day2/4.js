// example board
let board =
    [
        ['X', 'O', 'X'],
        ['O', 'O', 'O'],
        ['X', 'O', 'O']];


// Part 1: Create a function hasXWon which takes in a TicTacToe board and returns true if X has won otherwise false
// Exercise 2 - Part 1
function hasXWon(board) {
    // console.log(checkRows(board, 'X'), checkCols(board, 'X'), checkDiagonals(board, 'X'));
    return checkRows(board, 'X') || checkCols(board, 'X') || checkDiagonals(board, 'X');
}

function checkRows(board, player) {
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        let count = 0;
        for (let j = 0; j < row.length; j++) {
            if (row[j] === player) {
                if (++count === 3) return true
            }

        }
    }
    return false;
}

function checkCols(board, player) {
    for (let i = 0; i < 3; i++) {
        if (player === board[0][i] &&
            player === board[1][i] &&
            player === board[2][i]) {
            return true
        }
    }
    return false;
}

function checkDiagonals(board, player) {
    return player === board[0][0] && player === board[1][1] && player === board[2][2]
        ||
        player === board[2][0] && player === board[1][1] && player === board[0][2];
}

//Part 2: Create a function which takes in a TicTacToe board and prints the status of the board, it prints either:

function ticTacToeGameStatus(board) {
    let status = 'Game is drawn';
    if (hasWon(board, 'X')) {
        status = 'Player X has won';
    } else if (hasWon(board, 'O')) {
        status = 'Player O has won';
    } else {
        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            if (row.includes(undefined)) {
                status = 'Game in progress';
            }
        }
    }
    return status;
}

function hasWon(board, player) {
    return checkRows(board, player)
        || checkCols(board, player)
        || checkDiagonals(board, player);
}

// ticTacToeGameStatus(board)
console.log(
    'a','\f','b'
)