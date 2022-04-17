function howMany(arr1, arr2) {
    let [bigArr, smallArr] = arr1.length > arr2.length ? [arr1, arr2] : [arr2, arr1];

    let countLine = 0;
    let bigVisited = []; // keeps track of used visited elements of big array
    let mapObj = {}; // maps small to big arr Idx
    // Compare elements in straight line
    for (const [idx, sEle] of smallArr.entries()) {
        if (sEle === bigArr[idx]) {
            ++countLine;
            mapObj[idx] = idx;
            bigVisited.push(idx);
        }
    }
    // Compare element in Right ( 1 Index )
    for (const [idx, sEle] of smallArr.entries()) {
        if (sEle === bigArr[idx + 1]) {
            ++countLine;
            mapObj[idx] = idx + 1;
            bigVisited.push(idx + 1);
        }
    }
    // Compare element in Left ( 1 Index )
    for (const [idx, sEle] of smallArr.entries()) {
        if (idx === 0) continue; // skip 1st
        if (!bigVisited.includes(idx - 1) && sEle === bigArr[idx - 1]) {
            if (mapObj[idx - 1] === undefined || mapObj[idx - 1] !== idx) {
                ++countLine;
                mapObj[idx] = idx - 1;
            }
        }
    }
    return countLine;
}
console.log(
    howMany([1, 4, 2], [1, 2, 4]), // 2
    howMany([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]), // 3
    howMany([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]), // 2
    howMany([1, 1, 2, 1, 2], [1, 3, 2, 3, 1]), //3
);
