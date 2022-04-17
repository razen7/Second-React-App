// Exercise 2
function getLength(arr) {
    return arr.flat(Infinity).length;
}

console.log(
getLength([1, [2, 3]]) // should return 3
)
getLength([1, [2, [3, 4]]]) // should return 4

getLength([1, [2, [3, [4, [5, 6]]]]]) // should return 6

getLength([1, [2], 1, [2], 1]) // should return 5