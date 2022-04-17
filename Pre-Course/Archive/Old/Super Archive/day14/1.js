console.log(
    binarySearch([1, 2, 10, 11, 14], 2), // 1
    binarySearch([-1, 0, 1, 7, 9], 15), // -1
    binarySearch([8], 8), // 0
)
function binarySearch(jail, thiefId) {
    let [startIdx, endIdx] = [0, jail.length - 1];
    let findMidIdx = (startIdx, endIdx) => Math.ceil((startIdx + endIdx) / 2)

    while (startIdx < jail.length && endIdx >= 0) {
        let midIdx = findMidIdx(startIdx, endIdx);
        // console.log(`${jail[startIdx]}`, `${jail[endIdx]}`, `Mid-Idx: ${midIdx}`, `Thief: ${thiefId}`)
        if (jail[midIdx] < thiefId) {
            //mid is less
            startIdx = midIdx + 1;
        } else if (jail[midIdx] > thiefId) {
            //med is greater
            endIdx = midIdx - 1;
        } else if (jail[midIdx] === thiefId) {
            return midIdx;
        }
    }
    return -1;
}