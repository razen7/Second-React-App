restaurantPairScores([8, 1, 5, 2, 6]);
// should return [11, 6.8, 1]

function restaurantPairScores(ratings) {
    let scoresArr = helper(ratings);
    let min = Math.min(...scoresArr)
    let max = Math.max(...scoresArr)
    let avg = scoresArr.reduce((p, c) => p + c) / scoresArr.length
    return [max, avg, min];
}

function helper(rArr, p1 = 0, scoresArr = []) {
    //final
    if (p1 >= rArr.length - 1) {
        return scoresArr;
    }

    //rec
    let i = p1;
    for (let i2 = i + 1; i2 < rArr.length; i2++) {
        let score = rArr[p1] + rArr[i2] + p1 - i2;
        scoresArr.push(score);
    }
    return helper(rArr, p1 + 1, scoresArr);
}