console.log(
    minPathSum(
        [
            [500, 100, 230],
            [1000, 300, 100],
            [200, 1000, 200]
        ]
    )
);
function minPathSum(matrixArr) {
    return minPathSumHelper(matrixArr, 0, 0);
}

function minPathSumHelper(matrixArr, r, c) {
    let rLastIdx = matrixArr.length - 1;
    let cLastIdx = matrixArr[0].length - 1;
    // Base Case
    if (r === rLastIdx && c === cLastIdx) {
        return matrixArr[r][c];
    }
    /// Base OverFlow Case
    if (r > rLastIdx || c > cLastIdx) return Number.NEGATIVE_INFINITY;

    // Recursive Case
    let rightTurn = minPathSumHelper(matrixArr, r, c + 1);
    let downTurn = minPathSumHelper(matrixArr, r + 1, c);
    let maxPath_Cur = Math.max(rightTurn, downTurn);
    return maxPath_Cur + matrixArr[r][c];
}