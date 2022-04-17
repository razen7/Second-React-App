function multiplicativePersistence(num, count = 0) {
    if (num < 10) {
        return count;
    }
    let sumOfDigits = String(num).split('').reduce((product, digit) => product * Number(digit), 1);

    return multiplicativePersistence(sumOfDigits, ++count)
}
console.log(
    multiplicativePersistence(77),// ➞ 4
    // 7 x 7 = 49
    // 4 x 9 = 36
    // 3 x 6 = 18
    // 1 x 8 = 8
    // It takes 4 iterations to reach a single-digit number.

    multiplicativePersistence(123456),// ➞ 2
    // 1 x 2 x 3 x 4 x 5 x 6 = 720
    // 7 x 2 x 0 = 0

    multiplicativePersistence(4),// ➞ 0
    // Because 4 is already a single-digit integer.
)