function countSteps(n) {
    // write your code here
    if (n === 1) return 1;
    else if (n === 2) return 2;
    else
        return helper(n);
}
function helper(n, str = 'AA', i = 2) {
    //base
    if (str.length === n) return i;

    //rec
    str = str + str;
    str = str.substring(0, str.length - 1)
    return helper(n, str, i+1)
}

console.log(countSteps(3)); // 3
console.log(countSteps(5)); // 4
console.log(countSteps(9)); // 5
// should be 6


// shared by vivek
// console.log(countSteps(3)); // 3
// console.log(countSteps(31)); // 11
// console.log( countSteps(13)); // 10
// console.log(countSteps(6)); // 5
// console.log(countSteps(22)); // 11
// console.log(countSteps(18)); // 8
// console.log(countSteps(80));  // 13
// console.log(countSteps(99));  // 15
