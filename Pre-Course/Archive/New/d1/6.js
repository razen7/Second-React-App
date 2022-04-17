// create a deep copy of the given 2-dimensional array and update the value at the bottom right corner to 90

let matrix = [
    [100, 100, 2],
    [9, 10, 18],
    [3, 4, 8],
];

let copy = [];

for (let i = 0; i < matrix.length; i++) {
    let tmp = [];
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
        const element = row[j];
        tmp.push(element);
    }
    copy.push(tmp)
}

copy[2][2] = 90

console.table(matrix)
console.table(copy)