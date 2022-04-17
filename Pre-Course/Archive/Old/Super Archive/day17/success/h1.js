function distanceToNearestVowel(str) {
    let vowels = 'aeiou';
    let strArr = str.split('');

    let vowelsIdxArr = [];
    strArr.reduce((accu, char, idx, arr) => {
        if (vowels.includes(char))
            vowelsIdxArr.push(idx);
    }, strArr[0])
    // console.log(vowelsIdxArr)

    let distanceArr = [];
    let pointer = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (vowelsIdxArr[pointer + 1] === undefined) {
            let currDiff = Math.max(i, vowelsIdxArr[pointer]) - Math.min(i, vowelsIdxArr[pointer]);
            distanceArr.push(currDiff)
            // console.log(currDiff)
        } else {
            let currDiff = Math.max(i, vowelsIdxArr[pointer]) - Math.min(i, vowelsIdxArr[pointer]);
            let newDiff = Math.max(i, vowelsIdxArr[pointer + 1]) - Math.min(i, vowelsIdxArr[pointer + 1]);
            // console.log(currDiff,newDiff)
            if (currDiff < newDiff) {
                distanceArr.push(currDiff);
            } else if (currDiff === newDiff) {
                distanceArr.push(currDiff);
                ++pointer;
            } else {
                distanceArr.push(newDiff);
                ++pointer;
            }
        }
    }
    return distanceArr;
}
console.log(
    // distanceToNearestVowel("baaab"), // [1, 0, 0, 0, 1]))

    // distanceToNearestVowel("aaaaa"), // ➞ [0, 0, 0, 0, 0]

    // distanceToNearestVowel("babbb"), // ➞ [1, 0, 1, 2, 3]

    // distanceToNearestVowel("abcdabcd"), // ➞ [0, 1, 2, 1, 0, 1, 2, 3]

    distanceToNearestVowel("shopper"), // ➞ [2, 1, 0, 1, 1, 0, 1]
)