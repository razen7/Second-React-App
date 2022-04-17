console.log(sumOfCubes([1, 5, 9])); // should return 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

console.log(sumOfCubes([3, 4, 5])); // should return 216

console.log(sumOfCubes([2])); // should return 8

console.log(sumOfCubes([])); // should return 0

function sumOfCubes(arr) {
    return arr.reduce((acc, cur) => Math.pow(cur, 3) + acc, 0)
}

