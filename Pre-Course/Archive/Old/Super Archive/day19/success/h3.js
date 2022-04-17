function uniqueSort(arr) {
    let newObj = {};
    for (const val of arr) {
        newObj[val] = null;
    }
    return Object.keys(newObj).map(v => Number(v)).sort((a, b) => a - b);
}

console.log(
    uniqueSort([1, 2, 3, 4, 5, 8, 10]) // should return [1, 2, 3, 4]
    // ,
    // uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) // should return [1, 2, 3, 4]
    // ,
    // uniqueSort([6, 7, 3, 2, 1]) // should return [1, 2, 3, 6, 7]
)