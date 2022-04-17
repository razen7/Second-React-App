let sliceSum = (arr, num) => {
    let sum = 0;
    for (let index = 0; index < num; index++) {
        sum += arr[index]
    }
    return sum
}

console.log(
    sliceSum([1, 3, 2], 2),
    sliceSum([9, 8, 7, 6], 3),// should return 24
    // The parameter n is specified as 3.
    // The first 3 numbers in the list are 9, 8 and 7.
    // The sum of these 3 numbers is 24 (9 + 8 + 7).
    // Return the answer.
)