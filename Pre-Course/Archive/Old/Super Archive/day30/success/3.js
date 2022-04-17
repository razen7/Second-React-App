function maxPathSum(matrix, row, col, mArr = []) {
    if (col >= matrix[0].length || row >= matrix.length) {
        return Number.NEGATIVE_INFINITY;
    } else if (row === matrix.length - 1 && col === matrix[0].length - 1) {
        return matrix[row][col];
    }
    else if (mArr[String(row) + 'c' + col]) {
        return mArr[String(row) + 'c' + col];
    }
    else {
        mArr[String(row) + 'c' + String(col)] = matrix[row][col] + Math.max(maxPathSum(matrix, row + 1, col, mArr), maxPathSum(matrix, row, col + 1, mArr));
        return mArr[String(row) + 'c' + String(col)];
    }
}

let mt1 =
    [
        [500, 100, 230],
        [1000, 300, 100],
        [200, 1000, 200]
    ]

console.time();
console.log(maxPathSum(mt1, 0, 0));
console.timeEnd();
