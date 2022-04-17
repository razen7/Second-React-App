function islands(matrix) {
    let count = 0;
    let visited = [];
    let checkNeighbor = (r, c) => {
        let up = visited.includes((r - 1) + '-' + c);
        let down = visited.includes((r + 1) + '-' + c);//d
        let l = visited.includes(r + '-' + (c - 1));//l
        let right = visited.includes(r + '-' + (c + 1));//r
        return up || down || l || right;
    }
    let markConnections = (r, c) => {
        if (matrix[r - 1] && matrix[r - 1][c] === 1) visited.push((r - 1) + '-' + c)
        if (matrix[r + 1] && matrix[r + 1][c] === 1) visited.push((r + 1) + '-' + c)
        if (matrix[r][c - 1] === 1) visited.push(r + '-' + (c - 1))
        if (matrix[r][c + 1] === 1) visited.push(r + '-' + (c + 1))
    }
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === 1 && visited.includes(r + '-' + c) === false) {
                visited.push(r + '-' + c);
                if (!checkNeighbor(r, c)) {
                    console.log(r, c);
                    ++count;
                }
                markConnections(r, c);
            }
        }
    }
    console.log(count);
}
islands([
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 1],
    [1, 1, 1]
])// 2

// let input1 = [[0, 1, 0], [1, 1, 1], [0, 1, 0]]
// islands(input1) // 1

// let input2 = [[0, 1], [1, 0]]
// islands(input2) // 2

// let input3 = [[0, 1, 0],
// [1, 0, 1],
// [0, 1, 0]]
// islands(input3) // 4

// let input4 = [[0, 1, 0],
// [0, 0, 0],
// [0, 1, 0]]
// islands(input4) // 2