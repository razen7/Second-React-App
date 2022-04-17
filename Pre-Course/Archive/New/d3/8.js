countOnes([
    [1, 0],
    [0, 0]
]); // should return 1

countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
]); // should return 7

countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33]
]); // should return 2

function countOnes(matrix) {
    let count = 0;
    for (const r of matrix) {
        for (const ele of r) {
            if (ele === 1) {
                count++;
            }
        }
    }
    return count;
}