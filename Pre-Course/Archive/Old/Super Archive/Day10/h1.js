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
            sum += arr[i][i];
        }
        if (!sum === 45) return false;
    }
    //check 3*3 box
    for (let rowIdx = 0; rowIdx < 9; rowIdx += 3) {
        let curRow = rowIdx;
        let sum = 0;
        // console.log('row', rowIdx) // works
        for (let colBoxIdx = 0; colBoxIdx < 9; colBoxIdx += 3) {
            // console.log('colBoxIdx', colBoxIdx) // works
            // let curCol = rowIdx;
            for (let colIdx = colBoxIdx; colIdx < colBoxIdx + 3; colIdx++) {
                console.log('colIdx', colIdx) // working
                // console.log('Row', curRow) // working
                // sum+=arr[curRow++][colIdx];
                // console.log(arr[curRow][colIdx],curRow,colIdx)
                // need 
                // 0 0
                // 0 1
                // 0 2
                // 1 0
                // ...

            }
            ++curRow;
        }
        if (!sum === 45) return false;
    }
    return true;
}
// console.log(
sudokuValidator([
    [1, 5, 2, 4, 8, 9, 3, 7, 6],
    [7, 3, 9, 2, 5, 6, 8, 4, 1],
    [4, 6, 5, 3, 7, 1, 2, 9, 8],
    [3, 8, 7, 1, 2, 4, 6, 5, 9],
    [8, 9, 1, 7, 6, 3, 4, 2, 5],
    [2, 4, 6, 5, 9, 8, 7, 1, 3],
    [9, 1, 4, 6, 3, 7, 5, 8, 2],
    [6, 2, 8, 9, 4, 5, 1, 3, 7],
    [5, 7, 3, 8, 1, 2, 9, 6, 4],
])
// )