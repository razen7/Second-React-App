function isTriplet(n1, n2, n3) {
    let sortedArr = [n1, n2, n3].sort((a, b) => a - b).map(v => v * v);
    return sortedArr[0] + sortedArr[1] === sortedArr[2];
}

console.log(isTriplet(3, 4, 5), // ➞ true
    // 3² + 4² = 25
    // 5² = 25

    isTriplet(13, 5, 12), // ➞ true
    // 5² + 12² = 169
    // 13² = 169

    isTriplet(1, 2, 3) // ➞ false
    // 1² + 2² = 5
    // 3² = 9
);