asteroids = [5, 10, -5] // Output: [5, 10]
asteroids2 = [8, -8] // Output: []
asteroids3 = [10, 2, -5] // Output: [10]
console.log(
    asteroidCollision(asteroids),
    asteroidCollision(asteroids2),
    asteroidCollision(asteroids3),
)


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
