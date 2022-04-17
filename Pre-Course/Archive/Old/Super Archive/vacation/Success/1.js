function reversedBinaryInteger(num) {
    let numStr = num.toString(2);

    let reverseStr = numStr.split('').reverse().join('');
    let intVal = parseInt(reverseStr, 2);

    return intVal;

}
console.log(
    reversedBinaryInteger(10),// ➞ 5
    // 10 = 1010 -> 0101 = 5

    reversedBinaryInteger(12),// ➞ 3
    // 12 = 1100 -> 0011 = 3

    reversedBinaryInteger(25),// ➞ 19
    // // 25 = 11001 -> 10011 = 19

    reversedBinaryInteger(45),// ➞ 45
    // 45 = 101101 -> 101101 = 45
)