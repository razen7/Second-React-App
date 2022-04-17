console.log(highLow("1 2 3 4 5")); // should return "5 1"

highLow("1 2 -3 4 5"); // should return "5 -3"

highLow("1 9 3 4 -5"); // should return "9 -5"

console.log(highLow("13")); // should return "13 13"

function highLow(str) {
    let arr = str.split(' ').map(v => Number(v));
    return Math.max(...arr) + ' ' + Math.min(...arr)
}