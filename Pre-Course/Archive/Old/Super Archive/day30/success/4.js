let rowSum = (s, e, matrix, sum = 0) => {
    while (s < e) {
        sum += matrix[s];
        ++s;
    }
    return sum;
}
function maxPathSum(matrix) {
    let sum1, sum2, max = 0;
    for (let r = 0; r < matrix.length; r++) {
        if (r === 0) {
            sum1 = rowSum(1, matrix[r].length, matrix)
            sum2 = rowSum(0, matrix[r].length, matrix)
            max = Math.max(sum1, sum2)
        }
        // else if (r < matrix.length - 2) {
        //     sum1 = sum2;
        //     sum2 = rowSum(0, matrix[r + 1].length, matrix)
        //     max += Math.max(sum1, sum2)
        // } else if (r < matrix.length - 1) {
        //     sum1 = sum2;
        //     sum2 = rowSum(0, matrix[r + 1].length - 1, matrix)
        //     max += Math.max(sum1, sum2) + matrix[r][matrix[r].length - 1]
        // }
    }
    return max;
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
