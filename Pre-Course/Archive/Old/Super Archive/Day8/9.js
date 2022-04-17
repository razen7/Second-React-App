// Given an array of numbers, write a function that returns a new array containing all the numbers from the given array which are either in the first half or greater than 10.

let numbers = [1, 20, 9, 6, 7, 10];

function firstHalfOrGreaterthan10(num, idx, arr) {
    return idx < arr.length / 2 || num > 10;
}
console.log(
    numbers.filter(firstHalfOrGreaterthan10)
) 