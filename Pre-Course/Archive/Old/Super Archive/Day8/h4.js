// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.
// Use .filter array method to solve this exercise.

let filterArray = (arr) => arr.filter((v, idx) => v >= 0 && (typeof (v) !== 'string') && arr.indexOf(v) === idx)
console.log(
    filterArray([1, 2, "a", "b"])// ➞ [1, 2]
    // ,
    // filterArray([1, "a", "b", 0, 15])// ➞ [1, 0, 15]
    // ,
    // filterArray([1, 2, "aasf", "1", "123", 123])// ➞ [1, 2, 123]
)
