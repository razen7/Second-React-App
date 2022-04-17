function countPpl(matrix) {
    let groups = {}
    for (let i = 0; i < matrix.length; i++) {
        groups[i] = [];
    }
    let visited = [];

    let scan = (rowIdx, orgRow) => {
        if (!visited.includes(rowIdx)) {
            visited.push(rowIdx);
            for (let c = 0; c < matrix[rowIdx].length; c++) {
                if (matrix[rowIdx][c] === 1) {
                    groups[orgRow].push(c);
                    scan(c, orgRow);
                }
            }
            delete groups[rowIdx];
        }
    }
    for (let r = 0; r < matrix.length; r++) {
        if (!visited.includes(r)) {
            visited.push(r);
            for (let c = 0; c < matrix[r].length; c++) {
                if (matrix[r][c] === 1) {
                    // console.log(r)
                    groups[r].push(c);
                    scan(c, r);
                }
            }
        }
    }
    console.log(Object.keys(groups).length);
}
let input3 = [
    [1, 0, 0, 1],
    [0, 1, 0, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1]
] //1
countPpl(input3)

let input1 = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]];
countPpl(input1) //2

let input2 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
countPpl(input2) // 3