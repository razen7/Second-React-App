function sortIt(arr) {
    let compare = (num1, num2) => {
        num1 = Array.isArray(num1) ? num1[0] : num1;
        num2 = Array.isArray(num2) ? num2[0] : num2;
        // 1	sort b before a
        if (num1 > num2)
            return 1
        // -1	sort a before b
        if (num1 < num2)
            return -1
        return 0;
    }

    return arr.sort(compare)
}

console.log(
    sortIt([4, 1, 3]),// ➞ [1, 3, 4]

    sortIt([[4], [1], [3]]),// ➞ [[1], [3], [4]]

    sortIt([4, [1], 3]),// ➞ [[1], 3, 4]

    sortIt([[4], 1, [3]]),// ➞ [1, [3], [4]]

    sortIt([[3], 4, [2], [5], 1, 6]),// ➞ [1, [2], [3], 4, [5], 6]
)