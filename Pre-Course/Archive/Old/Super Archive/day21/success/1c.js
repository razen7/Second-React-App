console.log(
    nearestElement(1, [0, -2, 3, 2, -1])
    // toBe(3)
)

function nearestElement(num, listArr) {
    let findDiff = (n1, n2 = num) => {
        let diff = n1 > n2 ? n1 - n2 : n2 - n1;
        return Math.abs(diff);
    }
    let [near1, near2] = (findDiff(listArr[0]) < findDiff(listArr[1]))
        ? [
            [listArr[0], 0, findDiff(listArr[0])],
            [listArr[1], 1, findDiff(listArr[1])]
        ]
        : [
            [listArr[1], 1, findDiff(listArr[1])],
            [listArr[0], 0, findDiff(listArr[0])]
        ]

    for (let pointer = 2; pointer < listArr.length; pointer++) {
        const curEle = listArr[pointer];
        const curDist = findDiff(curEle);
        // console.log(pointer);
        const arrFormat = [curEle, pointer, curDist];
        if (curDist < near1[2]) {
            near2 = near1;
            near1 = arrFormat;
        } else if (curDist === near1[2]) {
            // console.log('hey');
            near2 = arrFormat;
        } else if (curDist <= near2[2]) {
            near2 = arrFormat;
        }
    }
    console.log(near1, near2);

    let [near1Dist, near2Dist] = [near1[2], near2[2]];
    if (near1Dist === near2Dist) {

        if (near1[0] >= near2[0])
            return near1[1];
        else {
            return near2[1];
        }
    } else {
        return near1[1];
    }
}