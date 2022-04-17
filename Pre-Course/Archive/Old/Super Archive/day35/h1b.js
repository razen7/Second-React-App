function countPpl(matrix) {
    let connected = new Array(matrix.length).fill(false);
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (r != c && matrix[r][c] === 1) {
                connected[r] = true;
                connected[c] = true;
            }
        }
    }
    let units = connected.length;

    connected.forEach(v => {
        if (v === true) --units;
    });
    // let noOfProvinces = fCount + Math.ceil(tCount / 2);
    // let noOfProvinces = (matrix.length - tCount) + 1;
    console.log(units);
    // console.log(tCount,fCount);
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