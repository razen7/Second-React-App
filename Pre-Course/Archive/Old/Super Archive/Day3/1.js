// Create a function to count the number of 1s in a 2D array.
function countOnes(matrix) {
    let count = 0;
    for (const i of matrix) {
        for (const val of i) {
            if (val === 1) ++count;
        }
    }
    return count;
}

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