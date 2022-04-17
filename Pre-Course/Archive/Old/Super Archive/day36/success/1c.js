console.log(clock([10, 3, 3, 2], 2)); // 10
console.log(clock([5, 3, 4], 1)); // 12
console.log(clock([2, 3, 10], 2)); // 12

function clock(timeArr, counters) {
    if (counters === 1) {
        return timeArr.reduce((cur, acc) => cur + acc)
    }

    let countersArr = new Array(counters).fill(0);
    for (const time of timeArr) {
        let min = Number.POSITIVE_INFINITY;
        let minIdx;
        for (const [k, v] of countersArr.entries()) {
            if (v < min) {
                min = v;
                minIdx = k;
            }
        }
        countersArr[minIdx] += time;
    }
    return Math.max(...countersArr);
}