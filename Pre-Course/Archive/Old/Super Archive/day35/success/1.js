console.log(wordGenerator("aa"));   //  ['aa', 'ae', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'ii', 'io', 'iu', 'oa', 'oe', 'oi', 'oo', 'ou', 'ua', 'ue', 'ui', 'uo','uu']

function wordGenerator(str) {
    let vowelPointers = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if ('aeiou'.includes(char)) vowelPointers.push(i);
    }
    // console.log(vowelPointers);
    let finalArr = [str];
    let vowelsArr = 'aeiou'.split('');
    let resultArr = [str];
    let tmpArr = [];
    // console.log(resultArr.length);
    for (let i = 0; i < vowelPointers.length; i++) {
        const p = vowelPointers[i];
        for (let r = 0; r < resultArr.length; r++) {
            const cur = resultArr[r];
            tmpArr = wordGeneratorHelper(cur.split(''), p, vowelsArr);
            // console.log(resultArr.length, r);
            finalArr.push(...tmpArr);
        }
        resultArr.push(...tmpArr);
    }
    return finalArr;
}

function wordGeneratorHelper(strArr, p, choices, rArr = []) {
    // Recursive
    for (let i = 0; i < choices.length; i++) {
        const vowel = choices[i];
        if (vowel !== strArr[p]) {
            strArrCopy = [...strArr]
            strArrCopy[p] = vowel;
            rArr.push(strArrCopy.join(''))
        }
    }
    return rArr;
}

