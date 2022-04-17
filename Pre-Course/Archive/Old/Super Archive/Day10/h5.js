function sudokuValidator(arr) {
    //check row
    for (const rowIdx in arr) {
        row = arr[rowIdx];
        for (let i = 1; i < 10; i++) {
            if (!row.includes(i)) return false
        }
    }
    //check col
    for (let i = 0; i < 9; i++) {
        let sum = 0;
        for (let j = 0; j < 9; j++) {
            sum += arr[j][i];
        }
        if (!(sum === 45)) return false;
    }
    //check first 3*3 box
    for (let rowIdx = 0; rowIdx < 9; rowIdx += 3) {
        let col = 0;
        //1st 3 rows
        let sum = 0;
        for (let first = rowIdx; first < rowIdx + 3; first++) {
            sum += arr[first][col] + arr[first][col + 1] + arr[first][col + 2];
            // console.log(arr[first][col] + arr[first][col + 1] + arr[first][col + 2])
        }
        if (!(sum === 45)) return false;
        
        //2nd 3
        sum = 0;
        for (let second = rowIdx; second < rowIdx + 3; second++) {
            sum += arr[second][col + 3] + arr[second][col + 4] + arr[second][col + 5];
        }
        if (!(sum === 45)) return false;

        //3rd 3
        sum = 0;
        for (let third = rowIdx; third < rowIdx + 3; third++) {
            sum += arr[third][col + 6] + arr[third][col + 7] + arr[third][col + 8];
        }
        if (!(sum === 45)) return false;
    }
    return true;
}
console.log(
    sudokuValidator([
        [1, 5, 2, 4, 8, 9, 3, 7, 6],
        [7, 3, 9, 2, 5, 6, 8, 4, 1],
        [4, 6, 8, 3, 7, 1, 2, 9, 5],
        [3, 8, 7, 1, 2, 4, 6, 5, 9],
        [5, 9, 1, 7, 6, 3, 4, 2, 8],
        [2, 4, 6, 8, 9, 5, 7, 1, 3],
        [9, 1, 4, 6, 3, 7, 5, 8, 2],
        [6, 2, 5, 9, 4, 8, 1, 3, 7],
        [8, 7, 3, 5, 1, 2, 9, 6, 4],
    ])
)