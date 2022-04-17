// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

function topThreeWords(text) {
    // remove all punctuation
    let cleanArr = text.replace(/[\W]+/g, " ").toLowerCase().split(' ');
    // console.log(cleanArr)

    // array with top 3 words in decending order
    let [first, second, third] = [-Infinity, -Infinity, -Infinity]
    let wordsCounterObj = cleanArr.reduce((wordsCount, curWord) => {
        if (curWord in wordsCount) {
            ++wordsCount[curWord]
        } else {
            wordsCount[curWord] = 1;
        }
        // console.log(wordsCount[curWord] >= wordsCount[first] || first === -Infinity)



        // console.log(first, second, third)
        if (first === -Infinity || wordsCount[curWord] > wordsCount[first]) {
            [first, second, third] = [curWord, first, curWord !== second ? second : third]
            // console.log(first, second, third)
        } else if (curWord !== first) {
            if (second === -Infinity || wordsCount[curWord] > wordsCount[second]) {
                [second, third] = [curWord, second];
            } else if (curWord !== second) {
                if (third === -Infinity || wordsCount[curWord] > wordsCount[third]) {
                    third = curWord;
                }
            }
        }
        // console.log(first, wordsCount[first], second, wordsCount[second], third, wordsCount[third])
        return wordsCount;
    }, {})
    return [first, second, third]
}

console.log(
    topThreeWords("a a a  b  c c  d d d d  e e e e e"), // e d a
    topThreeWords("a a c b b"), // a b c
)