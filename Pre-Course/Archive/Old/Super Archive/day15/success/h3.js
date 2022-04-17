function primeFactorize(num) {
    let isPrime = (numVar) => {
        let squareRoot = parseInt(Math.sqrt(numVar));
        for (let i = 2; i <= squareRoot; i++) {
            if (numVar % i === 0) return false;
        }
        return true;
    }
    let isFactor = (numVar, num) => num % numVar === 0;

    let primeFactorsArr = [];
    function getPrimeFactors(numVar) {
        for (let i = 2; i <= numVar; i++) {
            if (isPrime(i) && isFactor(i, numVar)) {
                primeFactorsArr.push(i);
                if (numVar / i != 1) {
                    getPrimeFactors(numVar / i);
                }
                return;
            }
        }
    }

    for (let i = 2; i <= num; i++) {
        if (isPrime(i) && isFactor(i, num)) {
            primeFactorsArr.push(i);
            getPrimeFactors(num / i);
            break;
        }
    }
    return primeFactorsArr;
}

function isBrilliant(num) {
    let primeFactors = primeFactorize(num);
    let isProductOfTwoPrime = primeFactors.length === 2;
    if (isProductOfTwoPrime) {
        let [digit1, digit2] = [primeFactors[0], primeFactors[1]]
        return String(digit1).length === String(digit2).length;
    }
    return false;
}
console.log(
    isBrilliant(11), // ➞ false
    // 11 is a prime.

    isBrilliant(9), // ➞ true
    // // 9 is equal to the square of a prime: 3²

    isBrilliant(21), // ➞ true
    // // 21 is equal to the product of two different primes: 3 x 7
    // // 3 and 7 have the same digital length.

    isBrilliant(22), // ➞ false
    // // 22 is equal to the product of two different primes: 2 x 11
    // // 2 and 11 have different digital lengths.
)