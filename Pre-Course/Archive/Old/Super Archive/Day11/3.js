// Implement the function areArraysEqual that accepts two array as a parameter and checks if they are equal or not using every method for arrays in JavaScript.

// For two arrays to be called equal their length and value at each index should be same.

function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    return arr1.every((val, idx, arr) => {return true;
    })
}
console.log(
    areArraysEqual([1, 2, 3], [1, 2, 3])
)