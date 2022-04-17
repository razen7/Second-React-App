function beggars(values, count) {
    let beggarsArr = new Array(count).fill(0);
    if (beggarsArr.length > 0) {
        let pointer = 0;
        for (const money of values) {
            beggarsArr[pointer] += money;
            pointer = pointer === beggarsArr.length - 1 ? 0 : ++pointer;
        }
    }
    return beggarsArr;
}
console.log(
    // beggars([1, 2, 3, 4, 5], 2),
    // // For 2 beggars this will return a result of `[9,6]`, as the first one takes `[1,3,5]`, the second collects `[2,4]`.

    // beggars([1, 2, 3, 4, 5], 3),
    // // The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].
    beggars([1, 2, 3, 4, 5], 0),
);