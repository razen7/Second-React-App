function carPooling(trips, maxCapacity) {
    let tripsArr = trips;
    let allstopsArr = new Array(1001).fill(null);

    for (let tRIdx = 0; tRIdx < tripsArr.length; tRIdx++) {
        const tripRecord = tripsArr[tRIdx];
        const [people, start, end] = [...tripRecord];

        let curMax = 0;
        for (let stopsIdx = start; stopsIdx < end; stopsIdx++) {
            allstopsArr[stopsIdx] += people;

            curMax = Math.max(allstopsArr[stopsIdx], curMax);
        }
        if (maxCapacity < curMax) return false;
    }
    return true;
}

console.log(
    carPooling([[3, 2, 7], [8, 3, 9], [3, 7, 9], [500, 2, 2]], 12), //true
)