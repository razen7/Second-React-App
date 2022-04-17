// Write a function that calculates the average of the numbers in an array using all 3 different function declaration syntax. Functions should be named calcAverage1, calcAverage2 and calcAverage3.

const arr = [23, 1, 15, 9];

function avg1(arr) {
    return arr.reduce((p, c) => p + c) / arr.length;
}

let avg2 = function (arr) {
    return arr.reduce((p, c) => p + c) / arr.length;
}
let avg3 = (arr) => {
    return arr.reduce((p, c) => p + c) / arr.length;
}
console.log(
    avg3(arr)
)
// NOTE: Gist link for different function declaration syntax: https://gist.github.com/McLarenCollege/c2bc43e16d2a5e3cb93dc1eb8ec4f069