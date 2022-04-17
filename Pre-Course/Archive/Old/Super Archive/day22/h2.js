function willArrowHit(matrix) {
    let length = matrix.length;
    for (const rIdx in matrix) {
        const row = matrix[rIdx];
        for (const cIdx in row) {
            const ele = row[cIdx];
            if (ele === '^') {
                for (let pointer = 0; pointer < rIdx; pointer++) {
                    if (matrix[pointer][cIdx] === 'x')
                        return true;
                }
                return false;
            } else if (ele === 'v') {
                for (let pointer = length-1; pointer > rIdx; pointer--) {
                    if (matrix[pointer][cIdx] === 'x')
                        return true;
                }
                return false;
            } else if (ele === '>') {
                for (let pointer = length-1; pointer > cIdx; pointer--) {
                    if (matrix[rIdx][pointer] === 'x')
                        return true;
                }
                return false;
            } else if (ele === '<') {
                for (let pointer = 0; pointer < cIdx; pointer++) {
                    if (matrix[rIdx][pointer] === 'x')
                        return true;
                }
                return false;
            }
        }
    }
    return false;
}
let input =
    [
        [' ', 'x', ' ', ' '],
        [' ', ' ', ' ', ' '],
        [' ', '^', ' ', ' '],
        [' ', ' ', ' ', ' ']
    ]
// Output: true

console.log(willItHit(input));