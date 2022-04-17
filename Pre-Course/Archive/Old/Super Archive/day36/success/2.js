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
        let up = (r - 1) + '-' + c;
        if (matrix[r - 1] && matrix[r - 1][c] === 1)
            if (!visited.includes(up)) {
                visited.push(up);
                markConnections(r - 1, c);
            }

        let down = (r + 1) + '-' + c;
        if (matrix[r + 1] && matrix[r + 1][c] === 1)
            if (!visited.includes(down)) {
                visited.push(down);
                markConnections(r + 1, c);
            }

        let left = r + '-' + (c - 1);
        if (matrix[r] && matrix[r][c - 1] && matrix[r][c - 1] === 1)
            if (!visited.includes(left)) {
                visited.push(left);
                markConnections(r, c - 1);
            }

        let right = r + '-' + (c + 1);
        if (matrix[r] && matrix[r][c + 1] && matrix[r][c + 1] === 1)
            if (!visited.includes(right)) {
                visited.push(right);
                markConnections(r, c + 1);
            }
    }

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === 1 && visited.includes(r + '-' + c) === false) {
                visited.push(r + '-' + c);
                if (!checkNeighbor(r, c)) {
                    ++count;
                }
                markConnections(r, c);
            }
        }
    }
    console.log(count);
}
let input1 = [[0, 1, 0], [1, 1, 1], [0, 1, 0]]
islands(input1) // 1

let input2 = [[0, 1], [1, 0]]
islands(input2) // 2

let input3 = [[0, 1, 0],
[1, 0, 1],
[0, 1, 0]]
islands(input3) // 4

let input4 = [[0, 1, 0],
[0, 0, 0],
[0, 1, 0]]
islands(input4) // 2