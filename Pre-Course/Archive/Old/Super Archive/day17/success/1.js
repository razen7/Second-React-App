function diceGame(moves) {
    let allMovesArr = moves;
    let playersArr = ['p1', 'p2', 'p3', 'p4'];

    let findLowestScore = (scoresArr) => {  // returns player or undefined when tie
        let pointer = 0;
        let [lowest, cur] = [scoresArr[pointer], scoresArr[++pointer]];
        while (pointer < scoresArr.length && cur !== undefined) {
            // console.log(lowest, cur)
            let sumOfMarks = (arr) => arr[0] + arr[1];
            let [lowestSum, curSum] = [sumOfMarks(lowest), sumOfMarks(cur)];
            if (lowestSum === curSum) {
                // console.log('here',cur,lowest)
                if (cur[0] === lowest[0]) {
                    return undefined;
                } else {
                    lowest = lowest[0] < cur[0] ? lowest : cur
                }
            } else {
                lowest = lowestSum < curSum ? lowest : cur;
            }
            cur = scoresArr[++pointer];
        }
        return {
            lowestScore: lowest,
            playerIdx: pointer - 2
        };
    }
    // console.log(findLowestScore([[6, 2], [4, 3], [3, 4], [5, 4]]));
    // findLowestScore([[6, 2], [4, 3], [3, 4], [5, 4]])
    for (let idx = 0; idx < allMovesArr.length && playersArr.length > 1; idx += playersArr.length+1) {
        let curMovesArr = allMovesArr.slice(idx, idx + playersArr.length)
        let lowestScore = findLowestScore(curMovesArr);
        // console.log(curMovesArr)
        if (lowestScore !== undefined) {
            // console.log(lowestScore['playerIdx'])
            playersArr.splice(lowestScore['playerIdx'], 1)
            // console.log(playersArr)
        }
    }
    return playersArr[0];
}

console.log(
    diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [3, 5], [1, 5], [4, 3], [1, 5], [1, 5], [5, 6], [2, 2]]), // ➞ "p1"
    diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [1, 5], [1, 5], [4, 3],[3, 6], [1, 2], [3, 6], [1, 5], [1, 5], [1, 6], [4, 5]]),// ➞ "p4"

)