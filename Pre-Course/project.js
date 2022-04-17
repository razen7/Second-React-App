const offsets = [[1, 1], [1, 0], [0, 1]]; // all 3 directions
const arrows = {
    '0': '🡦',
    '1': '🡣',
    '2': '🡢',
}
findWay();

function findWay() {
    let matrix = [
        ["", "X"],
        ["", ""],
    ]
    if (helper(matrix))
        console.table(matrix)
    else
        console.log('No Way Home!');
}

function helper(matrix, r = 0, c = 0) {
    let lastRowIdx = matrix.length - 1;
    let lastColIdx = matrix[lastRowIdx].length - 1;

    if (r === lastRowIdx && c === lastColIdx) { // final base
        matrix[r][c] = '🡢';
        return true;
    }

    for (let i = 0; i < offsets.length; i++) {
        const [r2, c2] = offsets[i];
        const [r3, c3] = [r + r2, c + c2];

        let tmp = matrix[r][c]
        matrix[r][c] = arrows[i];
        let step = validStep(matrix, r3, c3);
        // console.log(step);
        // process.exit()
        if (step) {
            return helper(matrix, r3, c3);
        }
        matrix[r][c] = tmp;
    }
    return false;
}

function validStep(matrix = [], row, col) { //✅
    return row < matrix.length && // Row Valid
        col < matrix[row].length &&// Col Valid
        matrix[row][col].toLowerCase() !== 'x' // Not a blocked path
}