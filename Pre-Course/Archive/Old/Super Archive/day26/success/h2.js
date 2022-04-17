function minPathSum(matrix) {
    return minPathSumHelper(matrix, 0, 0);
}

function minPathSumHelper(matrixArr, r, c) {
    let rLastIdx = matrixArr.length - 1;
    let cLastIdx = matrixArr[0].length - 1;
    // Base Case
    if (r === rLastIdx && c === cLastIdx) {
        return matrixArr[r][c];
    }
    /// Base OverFlow Case
    if (r > rLastIdx || c > cLastIdx) return Number.POSITIVE_INFINITY;

    // Recursive Case
    let rightTurn = minPathSumHelper(matrixArr, r, c + 1);
    let rightDownTurn = minPathSumHelper(matrixArr, r + 1, c + 1);
    let downTurn = minPathSumHelper(matrixArr, r + 1, c);
    let maxPath_Cur = Math.min(rightTurn, downTurn, rightDownTurn);
    return maxPath_Cur + matrixArr[r][c];
}
console.log(
    minPathSum(
        [
            [100, -350, -200],
            [-100, -300, 700]
        ]
    )
);