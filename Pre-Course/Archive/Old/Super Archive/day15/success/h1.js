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
    getPrimeFactors(num);
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
    return primeFactorsArr;
}
console.log(
    primeFactorize(2532), // ➞ [2, 2, 3, 211]
)