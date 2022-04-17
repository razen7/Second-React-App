let input = [[12, 15, 1, 6], [4, 11, 6, 3], [19, 11, 4, 2], [7, 6, 2, 2], [13, 8, 7, 2]]
// [[4, 10], [12, 23]]

rangeOfShadows(input)

function rangeOfShadows(dataArr) {
    // create shadows array
    // get x1 and x2 for all data
    let shadowsArr = new Array(dataArr.length).fill().map((val, idx) => {
        let refArr = input[idx];
        return [refArr[0], refArr[0] + refArr[2]]
    });

    // Sort acc to starting point
    shadowsArr.sort((a, b) => a[0] - b[0])

    // Combine and create shadows array
    let combinedShadowsArr = [];
    for (const [idx, arr] of shadowsArr.entries()) {
        if (idx === 0) {
            combinedShadowsArr.push([arr[0], arr[1]])
        } else {
            let cSALastIdx = combinedShadowsArr.length - 1;
            let [start1, end1] = [combinedShadowsArr[cSALastIdx][0], combinedShadowsArr[cSALastIdx][1]];
            let [start2, end2] = [shadowsArr[idx][0], shadowsArr[idx][1]];

            if (start2 <= end1) { // shadows can combine
                combinedShadowsArr[cSALastIdx][1] = Math.max(end1, end2);
            } else if (start2 > end1) { // shadows cannot combine
                combinedShadowsArr.push([start2, end2])
            }
        }
    }
    console.table(combinedShadowsArr);
}