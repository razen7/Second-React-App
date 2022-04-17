highLow("1 2 3 4 5"); // should return "5 1"

highLow("1 2 -3 4 5"); // should return "5 -3"

highLow("1 9 3 4 -5"); // should return "9 -5"

highLow("13"); // should return "13 13"

function highLow(str) {
    let arr = str.split(' ').map(val => Number(val));
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let str2 = max + ' ' + min;
    console.log(str2);
    return str2;
}