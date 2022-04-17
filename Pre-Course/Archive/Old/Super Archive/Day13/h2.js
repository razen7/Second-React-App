// Exercise 2
function primeNumbers(num) {
    let isPrime = (num) => {
        let squareRoot = parseInt(Math.sqrt(num));
        for (let i = 2; i <= squareRoot; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let primeCount = 0;
    for (let i = 2; i < num; i++) {
        if (isPrime(i)){
            ++primeCount;
        } 
    }
    return primeCount;
}

console.log(
    primeNumbers(10),// ➞ 4
    // 2, 3, 5 and 7

    primeNumbers(20),// ➞ 8
    // // 2, 3, 5, 7, 11, 13, 17 and 19

    primeNumbers(30),// ➞ 10
    // // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29
)