// Exercise 2
function competition_rank(obj, name) {
    let myScore = obj[name];
    let rank = 1;
    let sameScore = [0, 0];
    let curScore;
    for (const keyName in obj) {
        curScore = obj[keyName];
        if (curScore > myScore) {
            ++rank;
        } else if (curScore === myScore && name !== keyName) {
            ++rank;
            sameScore = [curScore, ++sameScore[1]];
        }
    }
    if (myScore === curScore) {
        return curScore - sameScore[1];
    } else {
        // console.log(sameScore)
        return rank - sameScore[1];
    }
}
console.log(
    competition_rank(
        {
          Kate: 92,
          Carol: 92,
          Jess: 87,
          Bruce: 87,
          Scott: 84,
        },
        "Bruce"
      )
)