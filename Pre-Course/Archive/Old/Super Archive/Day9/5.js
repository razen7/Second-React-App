// Write a function which takes in a list of numbers and returns the list containing cubes of those numbers

let getCubes = (arr) => arr.map(v => Math.pow(v, 3))

console.log(
getCubes([2, 5, 6, 3, 1])
// should return [ 8, 125, 216, 27, 1]
)