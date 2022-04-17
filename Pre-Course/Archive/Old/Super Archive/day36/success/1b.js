console.log(clock([10, 3, 3, 2], 2)); // 10
console.log(clock([5, 3, 4], 1)); // 12
console.log(clock([2, 3, 10], 2)); // 12

function clock(timeArr, counters) {
    if (counters === 1) {
        return timeArr.reduce((cur, acc) => cur + acc)
    }

    let countersArr = new Array(counters).fill(0);
    countersArr[0] = timeArr[0];
    for (let i = 1; i < timeArr.length; i++) {
        let time = timeArr[i];
        for (let c = 1; c < countersArr.length; c++) {
            if (time > countersArr[0]) {
                countersArr[0] += time;
                break;
            } else if (countersArr[c] === countersArr[0]) continue;
            else if (countersArr[c] < countersArr[0]) {
                while (countersArr[c] + time <= countersArr[0] && i < timeArr.length) {
                    countersArr[c] += time;
                    ++i;
                    time = timeArr[i]
                }
            }

        }
    }
    // console.log(countersArr[0]);
    return countersArr[0];
}