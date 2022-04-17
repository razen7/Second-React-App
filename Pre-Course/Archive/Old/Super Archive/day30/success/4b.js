
function maxPathSum(matrix) {
    let newArr = new Array(matrix.length).fill(0).map(item => new Array(matrix[0].length).fill(0))
    newArr[0][0] = matrix[0][0]
    for (let i = 1; i < matrix.length; i++) {
        newArr[0][i] = matrix[0][i] + newArr[0][i - 1]
    }
    for (let i = 1; i < matrix.length; i++) {
        newArr[i][0] = matrix[i][0] + newArr[i - 1][0]
    }

    for (let i = 1; i < newArr.length; i++) {
        for (let j = 1; j < newArr[i].length; j++) {
            newArr[i][j] = matrix[i][j] + Math.max(newArr[i - 1][j], newArr[i][j - 1])
        }
    }
    return newArr[matrix.length - 1][matrix[0].length - 1]
}

console.log(maxPathSum(
    [
        [500, 100, 230],
        [1000, 300, 100],
        [200, 1000, 200]
    ]
))