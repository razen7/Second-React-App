let matrix = [
    ['D', 'E', 'H', 'X', 'B'],
    ['A', 'O', 'G', 'P', 'E'],
    ['D', 'D', 'C', 'F', 'D'],
    ['E', 'B', 'E', 'A', 'S'],
    ['C', 'D', 'Y', 'E', 'N']
]
const offsets = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];

console.log(getPath(matrix));

function getPath(matrix) {
    let mCopy = matrix.map(r => { // new matrix with char codes
        return r.map(v => v.charCodeAt(0))
    });
    let max = Number.NEGATIVE_INFINITY;
    for (let r = 0; r < mCopy.length; r++) {
        for (let c = 0; c < mCopy[r].length; c++) {
            let counter = 1 + helper(mCopy, r, c);
            max = Math.max(max, counter);
        }
    }
    return max;
}

function helper(matrix, r, c) {
    //rock and roll
    let max = 0;
    for (let [r2, c2] of offsets) {
        [r2, c2] = [r2 + r, c2 + c]
        if (matrix[r2] && matrix[r2][c2]) {
            if (matrix[r2][c2] === matrix[r][c] + 1) {
                let curCount = 1 + helper(matrix,r2, c2)
                max = Math.max(curCount, max);
            }
        }

    }
    return max;
}