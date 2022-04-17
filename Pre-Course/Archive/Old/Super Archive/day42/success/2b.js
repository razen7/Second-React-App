console.log(restaurantPairScores([8, 1, 5, 2, 6]));
// should return [11, 6.8, 1]

function restaurantPairScores(ratings) {
    let scoresArr = [], max = Number.NEGATIVE_INFINITY, min = Number.POSITIVE_INFINITY;
    //rec
    for (let i = 0; i < ratings.length - 1; i++) {
        for (let i2 = i + 1; i2 < ratings.length; i2++) {
            let score = ratings[i] + ratings[i2] + i - i2;
            scoresArr.push(score);
            if (max < score) {
                max = score;
            }
            if (min > score) {
                min = score;
            }
        }
    }
    let avg = scoresArr.reduce((p, v) => p + v) / scoresArr.length
    return [max, avg, min]
}
