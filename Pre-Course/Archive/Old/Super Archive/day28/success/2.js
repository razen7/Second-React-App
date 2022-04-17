let obj = {};

function fib(n) {
    // base case
    if (n === 0 || n === 1) {
        return n;
    }
    if (obj[n] != undefined)
        return obj[n];
        
    // recursive case
    let nMinusOnethFib = fib(n - 1);
    let nMinusTwothFib = fib(n - 2);
    let fibRes = nMinusOnethFib + nMinusTwothFib
    obj[n] = fibRes;
    return fibRes;
}

console.log(
    fib(50)
);