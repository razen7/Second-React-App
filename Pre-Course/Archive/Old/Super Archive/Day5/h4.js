// Exercise 1
function largestSwap(num) {
    return num >= num
        .toString()
        .split('')
        .reverse()
        .join('');
}
// Write a function that takes a number and determines if it's still the largest after reversing the digits of the number.

// Illustration
console.log(
largestSwap(27)// ➞ false
,
largestSwap(43)// ➞ true
)
// If 27 is our input, we should return false because reversing the digits gives us 72, and 72 > 27. On the other hand, reversing 43 gives us 34, and 43 > 34.