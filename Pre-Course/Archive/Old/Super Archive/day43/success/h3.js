console.log(posNegSort([6, 3, -2, 5, -8, 2, -2])); // ➞ [2, 3, -2, 5, -8, 6, -2]

console.log(posNegSort([6, 5, 4, -1, 3, 2, -1, 1])); // ➞ [1, 2, 3, -1, 4, 5, -1, 6]

console.log(posNegSort([-5, -5, -5, -5, 7, -5])); // ➞ [-5, -5, -5, -5, 7, -5]

console.log(posNegSort([])); // ➞ []

function posNegSort(arr) {
    let sortedArr = arr.filter(v => v > 0).sort((a, b) => a - b);
    let i = 0;
    arr.forEach((v, idx, arr) => {
        if (v > 0) arr[idx] = sortedArr[i++];
    });
    return arr;
}