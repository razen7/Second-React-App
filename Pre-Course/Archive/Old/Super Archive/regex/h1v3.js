// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

function topThreeWords(text) {
    // remove all punctuation
    let cleanArr = text.toLowerCase().split(' ');

    // array with top 3 words in decending order
    let [first, second, third] = [-Infinity, -Infinity, -Infinity]
    let wordsCounterObj = cleanArr.reduce((wordsCount, curWord) => {
        if (curWord === '') return wordsCount;

        if (curWord.endsWith(',') || curWord.endsWith('.')) {
            curWord = curWord.substring(0, curWord.length - 1)
        }

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

    let result = [];
    for (const val of [first, second, third]) {
        if (wordsCounterObj[val] > 0) {
            result.push(val);
        }
    }
    return result;
}

console.log(
    topThreeWords("a a a  b  c c  d d d d  e e e e e") // ['e','d','a']
    // topThreeWords(" //wont won't won't ") // ["won't", "wont"]
)