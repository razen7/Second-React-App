function countPpl(matrix) {
    let connected = new Array(matrix.length).fill(false);
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix.length; c++) {
            if (r != c && matrix[r][c] === 1) {
                connected[r] = true;
                connected[c] = true;
            }
        }
    }
    let [tCount, fCount] = [0, 0];

    connected.forEach(v => {
        v === true ? ++tCount : ++fCount;
    });
    let noOfProvinces = fCount + Math.ceil(tCount / 2);
    console.log(noOfProvinces);
}

let input1 = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]];
countPpl(input1) //2

let input2 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
countPpl(input2) // 3