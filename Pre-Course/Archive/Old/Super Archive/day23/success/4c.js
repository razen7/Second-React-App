function noOfWays(n) {
    if (n === 1 || n === 2) {
        return n;
    } else {
        return noOfWays(n - 1) + noOfWays(n - 2);
    }
}
console.log(noOfWays(4));
