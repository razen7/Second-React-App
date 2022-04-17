function isSafe(matrix, row, col) {

    // Col -- ✅
    for (let curRow = 0; curRow < row; curRow++) {
        const ele = matrix[curRow][col];
        if (ele === 1) return false;
    }

    //  Left Upper -- ✅
    for (let curRow = row - 1, curCol = col - 1; curRow > -1 && curCol > -1; curRow--, curCol--) {
        const ele = matrix[curRow][curCol];
        if (ele === 1) return false;
    }

    // Right diagonal -- ✅
    for (let curRow = row - 1, curCol = col + 1; curRow > -1 && curCol < matrix.length; curRow--, curCol++) {
        const ele = matrix[curRow][curCol];
        if (ele === 1) return false;
    }
    return true
}

function placeNQueensHelper(matrix = [], nQueens, row = 0) {
    // console.log(nQueens);

    // Base Case
    if (nQueens <= 0) {
        console.table(matrix)
        return;
    }

    // 1 Gather all choices
    for (let col = 0; col < matrix[row].length; col++) {
        if (isSafe(matrix, row, col)) {
            // Pick the cell
            matrix[row][col] = 1;

            // Explore
            let explore = placeNQueensHelper(matrix, nQueens - 1, row + 1);

            // Unpicking
            matrix[row][col] = 0;
        }
    }
}

function placeNQueens(nQueens) {
    let matrix = new Array(nQueens).fill(0).map(r => new Array(nQueens).fill(0));
    return placeNQueensHelper(matrix, nQueens);
}

placeNQueens(4)
