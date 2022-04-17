wordRank("The quick brown fox.")// ➞"brown"

wordRank("Nancy is very pretty.")// ➞"pretty"

wordRank("Check back tomorrow, man!")// ➞"tomorrow"

wordRank("Wednesday is hump day.")// ➞"Wednesday"

function wordRank(str) {
    alphabets = '0abcdefghijklmnopqrstuvwxyz';

    let wordArr = str.split(' ').map(v => v.replace(/[^a-z]/gi, ''));
    let wordIdx = 0;
    let score = 0;
    let getScore = (word) => {
        let score = 0;
        let charArr = word.split('');
        for (const val of charArr) {
            score += alphabets.indexOf(val);
        }
        return score
    }
    for (const idx in wordArr) {
        const word = wordArr[idx];
        let curScore = getScore(word);
        if (curScore > score) {
            score = curScore;
            wordIdx = idx;
        }
    }
    return wordArr[wordIdx]
}