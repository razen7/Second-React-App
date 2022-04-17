function commonElements(arr1, arr2) {
    // Time Complexity: n + m
    let [smallArr, bigArr] = (arr1.length > arr2.length) ? [arr2, arr1] : [arr1, arr2];

    let bigArrObj = bigArr.reduce((accu, cur) => {
        accu[cur] = '';
        return accu;
    }, {})

    let commonArr = smallArr.reduce((accu, cur) => {
        if (bigArrObj.hasOwnProperty(cur)) accu.push(cur);
        return accu;
    }, []);

    return commonArr;
}

function commonElements2(arr1, arr2) {
    // Time Complexity: n * log m
    let [smallArr, bigArr] = (arr1.length > arr2.length) ? [arr2, arr1] : [arr1, arr2];

    // loop through smallArr and compare with big
    let searchIdx = 0, commonArr = [];

    for (let idx = 0; idx < smallArr.length && searchIdx < bigArr.length; idx++) {
        let smallArrVal = smallArr[idx];
        while (smallArrVal > bigArr[searchIdx] && searchIdx < bigArr.length) { // small arr val greater
            ++searchIdx;
        }

        let bigArrVal = bigArr[searchIdx];
        if (smallArrVal === bigArrVal) {
            commonArr.push(smallArrVal);
            ++searchIdx;
        }
    }
    return commonArr;
}
console.time()
console.log(
    commonElements([-1, 3, 4, 6, 7, 9], [1, 3]),// ➞ [3]

    commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]),// ➞ [1, 3, 4, 7]

    commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]),// ➞ [1, 2, 4, 5]

    commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]),// ➞ []
)
console.timeEnd()

console.time()
console.log(
    commonElements2([-1, 3, 4, 6, 7, 9], [1, 3]),// ➞ [3]

    commonElements2([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]),// ➞ [1, 3, 4, 7]

    commonElements2([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]),// ➞ [1, 2, 4, 5]

    commonElements2([1, 2, 3, 4, 5], [10, 12, 13, 15]),// ➞ []
)
console.timeEnd()