asteroids = [5, 10, -5] 
asteroids2 = [8, -8] 
asteroids3 = [10, 2, -5] 
console.log(
    asteroidCollision(asteroids),// Output: [5, 10]
    asteroidCollision(asteroids2),// Output: []
    asteroidCollision(asteroids3),// Output: [10]
)
console.log(asteroidCollision([-2, -1, 1, 2])); // [-2,-1,1,2]
console.log(asteroidCollision([-2, -2, -2, -2])); // [-2, -2, -2, -2]
console.log(asteroidCollision([-2, 1, 1, -2])); // [-2, -2]
console.log(asteroidCollision([-1, 1, 1, -2])); // [-1,-2]

function asteroidCollision(arr) {
    for (let idx = arr.length - 1; idx > 0; idx--) {
        const curEle = arr[idx];
        const nextEle = arr[idx - 1];
        // check both values are going in same direction
        if ((curEle > 0 && nextEle > 0) || (curEle < 0 && nextEle < 0)) {
        } else if (nextEle < curEle) { // both values are going in diff direction 
        } else if (Math.abs(curEle) == Math.abs(nextEle)) { // collision case where both values are destroyed
            arr.splice(idx - 1, 2);
        } else if (Math.abs(curEle) > Math.abs(nextEle)) { // collision case where one value is discarded
            arr.splice(idx - 1, 1);
        } else if (Math.abs(nextEle) > Math.abs(curEle)) { 
            arr.splice(idx, 1);
        }
    }
    return arr;
}
