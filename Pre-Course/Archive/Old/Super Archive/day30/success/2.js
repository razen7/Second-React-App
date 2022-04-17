function noOfWays(n, mArr = []) {
    if (n === 1 || n === 2) {
        return n;
    } else if (mArr[n]) {
        return mArr[n];
    } else {
        mArr[n] = noOfWays(n - 1,mArr) + noOfWays(n - 2,mArr);
        return mArr[n];
    }
}
console.log(noOfWays(400));