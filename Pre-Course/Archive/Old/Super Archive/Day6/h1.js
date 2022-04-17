// Exercise 1 - Sum of Evenly Divisible Numbers from a Range
// Create a function that takes three arguments a, b, c and returns the sum of the numbers that are evenly divided by c from the range a, b inclusive.

function evenlyDivisible(a, b, c) {
    let evenlyDivided = [];
    for (let i = a; i <= b; i++) {
        if (i % c === 0) evenlyDivided.push(i);
    }
    const sum = evenlyDivided.length > 0 ? evenlyDivided.reduce((p, c) => p + c) : 0;
    return sum;
}
console.log(
    evenlyDivisible(-10, -1, 2) // should return 0
    // No number between 1 and 10 can be evenly divided by 20.
    // ,
    // evenlyDivisible(1, 10, 2) // should return 30
    // // 2 + 4 + 6 + 8 + 10 = 30
    // ,
    // evenlyDivisible(1, 10, 3) // should return 18
    // 3 + 6 + 9 = 18
)