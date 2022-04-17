// console.log(numToGoogle(["12213467"])); // ➞ "Google."

// console.log(numToGoogle(["12213467", "321"]));// ➞ "Google.log"

// console.log(numToGoogle(["12213467", "321", "122906"]));// ➞ "Google.log"

// console.log(numToGoogle(["15", "2502", "15", "345"]));// ➞ "GOOGlE"

// console.log(numToGoogle(["15", "2502", "15", "35", "45"]));// ➞ "GOOGLE"
console.log(numToGoogle(["152021348"]));

function numToGoogle(arr) {
    let sentence = '';
    for (const str of arr) {
        sentence += decryptWord(str.split(''));
    }
    return sentence;
}

function decryptWord(nStrArr) {
    let [curLetter, prevLetter, curWordArr] = ['', '', []];
    let skipIt = false; // skip the character used for the number of repetitions to be done.
    let skipIt2 = false; // skip adding current character when unneeded
    let pointSpace = '';
    for (const [idx, char] of nStrArr.entries()) {
        if (skipIt) {
            skipIt = false;
        } else {
            switch (char) {
                case '0':
                    if (prevLetter !== '') {
                        curLetter = curWordArr[curWordArr.length - 1].repeat(nStrArr[idx + 1] - 1);
                    }
                    skipIt = true;
                    break;
                case '1':
                    curLetter = 'g';
                    break;
                case '2':
                    curLetter = 'o';
                    break;
                case '3':
                    curLetter = 'l';
                    break;
                case '4':
                    curLetter = 'e';
                    break;
                case '5': // previous letter to uppercase.
                    skipIt2 = true;
                    let lastLetter = curWordArr[curWordArr.length - 1];
                    curWordArr[curWordArr.length - 1] = lastLetter.toUpperCase();
                    break;
                case '6':
                    pointSpace = '.';
                    skipIt2 = true;
                    break;
                case '7': // 7 Change first letter to uppercase.
                    skipIt2 = true;
                    let firstLetter = curWordArr[0];
                    curWordArr[0] = firstLetter.toUpperCase();
                    break;
                case '8': // Reverse
                    curWordArr = curWordArr.reverse();
                    skipIt2 = true;
                    break;
                case '9': // clear
                    [curLetter, prevLetter, curWordArr] = ['', '', []]
                    break;

                default:
                    break;
            }
            if (skipIt2) {
                skipIt2 = false
            } else {
                curWordArr.push(curLetter);
                prevLetter = curLetter;
            }
        }
    }
    return curWordArr.join('') + pointSpace;
}