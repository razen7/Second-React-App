// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

function topThreeWords(text) {
    // remove all punctuation
    let cleanArr = text.replace(/[\W_]+/g, " ").toLowerCase().split(' ');

    // array with top 3 words in decending order
    let [first, second, third] = [-Infinity, -Infinity, -Infinity]
    let wordsCounterObj = cleanArr.reduce((wordsCount, curWord) => {
        if (curWord in wordsCount) {
            ++wordsCount[curWord]
        } else {
            wordsCount[curWord] = 1;
        }
        
        if (!wordsCount.hasOwnProperty(first) || wordsCount[curWord] >= wordsCount[first]) {
            if (curWord !== first)
                [first, second, third] = [curWord, first, second]
        } else if (wordsCount[curWord] >= wordsCount[second]) {
            if (curWord !== second)
                [second, third] = [curWord, second];
        } else if (wordsCount[curWord] > wordsCount[third]) {
            third = curWord;
        }
        console.log(first, wordsCount[first], second, wordsCount[second], third, wordsCount[third])
        return wordsCount;
    }, {})
    return [first, second, third]
}

let a = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`

console.log(
    topThreeWords("a a a  b  c c  d d d d  e e e e e")
)