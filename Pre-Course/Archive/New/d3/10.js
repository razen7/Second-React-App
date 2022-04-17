// (Normal function declaration)
function calcAverage1(arr) {
    let sum = arr.reduce((acc, cur) => acc + cur)
    return sum / arr.length;
}
// calcAverage2(Function as an expression)
let calcAverage2 = function (arr) {
    let sum = arr.reduce((acc, cur) => acc + cur)
    return sum / arr.length;
}
// calcAverage3(Arrow function syntax)
let calcAverage3 = (arr) => {
    let sum = arr.reduce((acc, cur) => acc + cur)
    return sum / arr.length;
}
// Test your code with the array as [23, 1, 15, 9]
console.log(calcAverage3([23, 1, 15, 9]));