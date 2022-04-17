const grid = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
[21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
[31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
[41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
[51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
[61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
[71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
[81, 82, 83, 84, 85, 96, 87, 88, 89, 90],
[91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]

spotlight_sum(grid, 45) //➞ 405

// The 8 numbers surrounding 45 on the grid are:
// [34, 35, 36, 44, 46, 54, 55, 56]
// Total of the numbers is 360.
// Include 45 in the total (360 + 45 = 405)
// Return the answer.

spotlight_sum(grid, 96) //➞ 556 // since we have 2 96 values we will pick the one with highest row. So we will pick the value `96` at last row and since it is at the last row it will only have 5 neighbours which are `85, 96, 87, 95, 97` so summing all `96 + 96 + 85 + 87 + 95 + 97` i.e `556`
function getPos(grid, n) {
    for (let i = grid.length - 1; i >= 0; i--) {
        const row = grid[i];
        if (row.includes(n)) {
            let col = row.lastIndexOf(n);
            while (col > 0 && col < --row.length) {
                return {
                    'row': Number(i),
                    'col': col,
                };
            }
        }
    }
    return false;
}

function spotlight_sum(grid, n) {
    // 1. find position
    let pos = getPos(grid, n);
    if (pos === false) return false;
    // Get spotlightSum
    let startRow = pos.row - 1, endRow = pos.row + 1;
    let sum = 0;
    for (let i = startRow; i <= endRow; i++) {
        const row = grid[i];
        if (row) {
            let startCol = pos.col - 1, endCol = pos.col + 1;
            for (let j = startCol; j <= endCol; j++) {
                const element = row[j];
                sum += element;
            }
        }
    }
    return sum;
}