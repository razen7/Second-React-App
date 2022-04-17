function isSafe(matrix, row, col) {

    // Col -- ✅
    for (let curRow = 0; curRow < row; curRow++) {
        const ele = matrix[curRow][col];
        if (ele === 1) return false;
    }

    //  Left diagonal -- ✅
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
console.log(
    isSafe(
        [
            [0, 0, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], 3, 0
    )
);