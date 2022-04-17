// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return the result as an array.

let arr = [5, 3, 8, 1];

let filterRange = ((arr, a, b) => arr.filter(v => v >= a && v <= b))
let filtered = filterRange(arr, 1, 4);
console.log(filtered)