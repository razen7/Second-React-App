function totalDistance(sHeight, sLength, towerHeight) {
    let numOfStairs = towerHeight / sHeight;
    let distance = (numOfStairs * sHeight) + (numOfStairs * sLength);
    return Math.round(distance * 10) / 10;
}

console.log(
    totalDistance(0.2, 0.4, 100.0) // ➞ 300.0
    // Total distance is 300.
    ,
    totalDistance(0.3, 0.2, 25.0)// ➞ 41.7
    ,
    totalDistance(0.1, 0.1, 6.0)// ➞ 12.0
)