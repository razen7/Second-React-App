let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// rotateMatrix(matrix1)

let matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
// [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
rotateMatrix(matrix2)

function rotateMatrix(matrix) {
    let mCopy = new Array(matrix.length).fill('').map(v => new Array(matrix.length).fill(1));
    let lastIdx = matrix.length - 1;
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix.length; c++) {
            mCopy[c][lastIdx - r] = matrix[r][c];
        }
    }
    console.table(mCopy)
}