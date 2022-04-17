function largerThanRight(arr) {
    let newArr = [];
    let high = -Infinity;
    for (let idx = arr.length - 1; idx >= 0; idx--) {
        const num = arr[idx];
        if (num > high) {
            newArr.unshift(num);
            high = num;
        }
    }
    return newArr;
}
console.log(
    largerThanRight([3, 13, 11, 2, 1, 9, 5])// ➞ [13, 11, 9, 5]
    // 13 is larger than all numbers to its right, etc.
)