// Some edge cases:
console.log(asteroidCollision([-2, -1, 1, 2])); // [-2,-1,1,2]
console.log(asteroidCollision([-2, -2, -2, -2])); // [-2, -2, -2, -2]
console.log(asteroidCollision([-2, 1, 1, -2])); // [-2, -2]
console.log(asteroidCollision([-1, 1, 1, -2])); // [-1,-2]
function asteroidCollision(arr) {
    let safeArr = [];
    for (let idx = arr.length - 1; idx > 0; idx--) {
        const curEle = arr[idx];
        const nextEle = arr[idx - 1];
        if ((curEle > 0 && nextEle > 0) || (curEle < 0 && nextEle < 0)) {
            safeArr.unshift(curEle);
            continue;
        } else if (Math.abs(curEle) == Math.abs(nextEle)) {
            arr.splice(idx - 1, 2);
            continue;
        } else if (Math.abs(curEle) > Math.abs(nextEle)) {
            arr.splice(idx - 1, 1);
            continue;
        } else if (Math.abs(nextEle) > Math.abs(curEle)) {
            arr.splice(idx, 1);
            continue;
        }
    }
    if (arr.length > 0)
        safeArr.unshift(arr[0])

    return safeArr;
}
