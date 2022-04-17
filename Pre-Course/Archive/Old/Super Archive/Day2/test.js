// create a deep copy of the given 2-dimensional array and update the value at the bottom right corner to 90

let matrix = [[100, 100, 2], [9, 10, 18], [3, 4, 8]]

let deepCopy = [];

for (let i = 0; i < matrix.length; i++) {
    deepCopy[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
        deepCopy[i].push(matrix[i][j]);
    }
}
deepCopy[deepCopy.length - 1][deepCopy[deepCopy.length - 1].length] = 90;
console.log(deepCopy, matrix);