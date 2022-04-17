// Exercise 2
// The iterated square root of a number is the number of times the square root function must be applied to bring the number strictly under 2.

// Given an integer, return its iterated square root. Return "invalid" if it is negative.
function iSqrt(num) {
    if (num < 0) return "invalid"

    let count = 0;
    while (num >= 2) {
        num = Math.sqrt(num);
        ++count;
    }
    return count;
}

iSqrt(1) //➞ 0

iSqrt(2) //➞ 1

iSqrt(7) //➞ 2

iSqrt(27) //➞ 3

iSqrt(256) //➞ 4

iSqrt(-1) //➞ "invalid"