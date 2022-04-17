// Exercise 2
function mean(num) {
    const sum = num
        .toString()
        .split('')
        .map(v => Number(v))
        .reduce((p, c) => p + c);
    return sum / num.toString().split('').length;
}
// Create a function that returns the mean of all digits.

mean(42)// ➞ 3

mean(12345)// ➞ 3

mean(666)// ➞ 6