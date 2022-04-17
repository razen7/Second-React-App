function isSubset(firstArr, secondArr) {
    // write your code here
    return firstArr.every(v => secondArr.includes(v))
}
console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])); // should print true

console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])); // should print true

console.log(isSubset([1, 2], [3, 5, 9, 1])); // should print false