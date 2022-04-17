// https://leetcode.com/explore/interview/card/top-interview-questions-medium/113/math/817/

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let input1 = "A" // Output: 1
// console.log(getColNum(input1));

let input2 = "AB" // Output: 28
// console.log(getColNum(input2));

let input3 = "ZY" // Output: 701
console.log(getColNum(input3));

function getColNum(str) {
    return helper(str);
}

function helper(str, p1 = 0, p2 = 0, i = 1) {
    let cur = alphabets.substring(0, p1) + alphabets.substring(p2, p2 + 1);
    console.log(cur);
    // base
    if (str === cur)
        return i;
    // else if (i > 701)
    //     return i;

    //rec
    if (p2 < 25) {
        ++p2;
    } else if (p2 === 25) {
        p2 = 0;
        ++p1;
    }

    return helper(str, p1, p2, i + 1);
}