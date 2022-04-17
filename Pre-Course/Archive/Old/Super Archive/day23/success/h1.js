function sumFractions(arr) {
    sum = arr.reduce((accu, cur) => {
        return accu + cur[0] / cur[1];
    }, 0)
    return Math.round(sum)
}
console.log(
    sumFractions([[18, 13], [4, 5]]), // → 2

    sumFractions([[36, 4], [22, 60]]), // → 9

    sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]), // → 11
);