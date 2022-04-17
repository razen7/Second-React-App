function additivePersistence(num, count = 0) {
    if (num < 10) {
        return count;
    }
    let sumOfDigits = String(num).split('').reduce((sum, digit) => sum + Number(digit), 0);

    return additivePersistence(sumOfDigits,++count)
}
console.log(
    additivePersistence(1679583),// ➞ 3
    // 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
    // 3 + 9 = 12
    // 1 + 2 = 3
    // It takes 3 iterations to reach a single-digit number.

    additivePersistence(123456),// ➞ 2
    //     // 1 + 2 + 3 + 4 + 5 + 6 = 21
    //     // 2 + 1 = 3

    additivePersistence(6),// ➞ 0
    // // Because 6 is already a single-digit integer.
)