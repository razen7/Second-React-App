console.log(
    nearestElement(10, [1, 100, 1000]) // 0
    // 1 is the number nearest to 10.
)

function nearestElement(num, listArr) {
    let findDiff = (n1, n2 = num) => {
        [n1, n2] = [Math.abs(n1), Math.abs(n2)];
        return n1 > n2 ? n1 - n2 : n2 - n1;
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

    // console.log(near1, near2);

    for (let pointer = 2; pointer < listArr.length; pointer++) {
        const curEle = listArr[pointer];
        const curDist = findDiff(curEle);
        const arrFormat = [curEle, pointer, curDist];
        if (curDist < near1[2]) {
            near2 = near1;
            near1 = arrFormat;
        } else if (curDist === near1[2]) {
            near2 = arrFormat;
        } else if (curDist <= near2[2]) {
            near2 = arrFormat;
        }

        let [near1Dist, near2Dist] = [near1[2], near2[2]];
        // console.log(near1Dist, near2Dist);
        if (near1Dist === near2Dist) {

            if (near1[0] >= near2[0])
                return near1[1];
            else
                return near2[1];
        } else {

            return near1[1];
        }
    }
}