function totalPoints(guessesArr, word) {
    let wordToObj = (word) => {
        let pointsObj = {};
        for (let index = 0; index < word.length; index++) {
            const char = word[index];
            if (pointsObj[char]) pointsObj[char]++;
            else pointsObj[char] = 1;
        }
        return pointsObj;
    }

    let pointsArr = [];
    for (const wordTmp of guessesArr) {
        if (wordTmp === word) {
            pointsArr.push(4)
            continue;
        }

        let wordIsValid = true;
        let wordObj = wordToObj(wordTmp)

        let test='t'
        let pat1=new RegExp(test,'g')
        console.log("tcat".match(pat1))         
    }
    return pointsArr.reduce((accu, cur) => accu + cur, 0);
}
// console.log(
totalPoints(["tcat"])
    // , // 2
    // Since "create" is an invalid word.

    // totalPoints(["trance", "recant"], "recant"), // 58
    // // "trance" scores 54 pts, while "recant" scores only 4 because it is the same word as the input.

    // totalPoints(["dote", "dotes", "toes", "set", "dot", "dots", "sted"], "tossed") // 13
    // Since 2 + 3 + 2 + 1 + 1 + 2 + 2 = 13
// )