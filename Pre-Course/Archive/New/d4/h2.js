let students = [{ name: 'Raj', score: 100 }, { name: 'John', score: 90 }, { name: 'Michael', score: 88 }]

console.log(map(students)); // Expected output ['Raj', 'John', 'Michael']

function map(arr) {
    let result = [];
    for (const obj of arr) {
        result.push(obj.name)
    }
    return result;
}

let numbers = [20, 12, 7, 13, 53];

filter(numbers); // Expected output [7, 13, 53]

function filter(arr) {
    let result = [];
    for (const num of arr) {
        if (isPrime(num))
            result.push(num)
    }
    return result;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    let i = 2;
    while (i < num) {
        if (num % i === 0) {
            return false
        }
        i++;
    }
    return true;
}

numbers = [12, 100, 8, 4, 1];

every(numbers); // false

function every(arr) {
    for (const num of arr) {
        if (num % 2 != 0)
            return false;
    }
    return true;
}