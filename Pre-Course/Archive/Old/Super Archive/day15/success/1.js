function totalPoints(guessesArr, word) {
    let pointMaker = (word) => {
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
        pointsObj = pointMaker(word);
        for (let idx = 0; idx < wordTmp.length; idx++) {
            const char = wordTmp[idx];
            if (pointsObj[char] && pointsObj[char] !== 0) {
                --pointsObj[char];
            } else {
                wordIsValid = false;
                break;
            }
        }
        if (wordIsValid) {
            let wordLen = wordTmp.length;
            switch (wordLen) {
                // 3-letter words are 1 pt
                case 3: pointsArr.push(1); break;
                // 4-letter words are 2 pts
                case 4: pointsArr.push(2); break;
                // 5-letter words are 3 pts
                case 5: pointsArr.push(3); break;
                // 6-letter words are 4 pts + 50 pt bonus
                case 6: pointsArr.push(54); break;
            }
        }
    }
    return pointsArr.reduce((accu, cur) => accu + cur, 0);
}
console.log(
    totalPoints(["cat", "create", "sat"], "caster"), // 2
    // Since "create" is an invalid word.

    totalPoints(["trance", "recant"], "recant"), // 58
    // // "trance" scores 54 pts, while "recant" scores only 4 because it is the same word as the input.

    totalPoints(["dote", "dotes", "toes", "set", "dot", "dots", "sted"], "tossed") // 13
    // Since 2 + 3 + 2 + 1 + 1 + 2 + 2 = 13
)