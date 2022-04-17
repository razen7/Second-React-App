// Write the code to find the tree which has more than 5 count using built -in find method.

let evergreens = [
    { name: "cedar", count: 2 },
    { name: "fir", count: 6 },
    { name: "pine", count: 3 }
];

console.log(evergreens.find(v => v.count > 5))

// Find the index of first even number using findIndex built-in method.

let nums = [11, 7, 3, 1, 12, 14, 13, 18];

console.log(nums.findIndex(val => val % 2 === 0))

// Use every method to check if an array is fabulous or not. We call an array fabulous if all it's elements are even and multiples of 3. Feel free to create a function so you can reuse it.

let arr1 = [228, 4782, 171];
let arr2 = [1512, 18, 174, 204];

function check(num) {
    return num % 2 === 0 && num % 3 === 0;
}

console.log(
    arr1.every(check),
    arr2.every(check),
)