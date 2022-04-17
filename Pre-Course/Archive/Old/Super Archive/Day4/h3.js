// Exercise 2.1
// Implement the function map that accepts an array of objects and return a list of student names.

let students = [{ name: 'Raj', score: 100 }, { name: 'John', score: 90 }, { name: 'Michael', score: 88 }]

map(students) // Expected output ['Raj', 'John', 'Michael']

function map(arr) {
    let names = [];
    for (const v of arr) {
        names.push(v.name);
    }
    return names;
}

// Exercise 2.2
// Implement the function filter that accepts a list of numbers and return a new list containing all the prime numbers from the given list.

let numbers = [20, 12, 7, 13, 53];

filter(numbers); // Expected output [7, 13, 53]

function filter(arr) {
    let primeArr = [];
    arr.forEach(num => {
        if (isPrime(num)) primeArr.push(num);
    });
    return primeArr;
}

function isPrime(num) {
    let squareRoot = parseInt(Math.sqrt(num));
    for (let i = 2; i <= squareRoot; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Exercise 2.3
// Implement the function every which accepts an array and checks if every value in array is even or not.

numbers = [12, 100, 8, 4, 1];

let o = every(numbers); // false
console.log(o)
function every(arr) {
    for (const val of arr) {
        if (val % 2 !== 0) return false;
    }
    return true;
}