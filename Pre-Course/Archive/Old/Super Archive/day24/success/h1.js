function doesRhyme(str1, str2) {
    [str1, str2] = [str1.split(' ').slice(-1)[0], str2.split(' ').slice(-1)[0]];
    [str1, str2] = [str1.toLowerCase(), str2.toLowerCase()]
    let flag = false;
    for (const vowel of ['a', 'e', 'i', 'o', 'u']) {
        if (str1.includes(vowel) && !str2.includes(vowel)) {
            return false
        } else if (!str1.includes(vowel) && str2.includes(vowel))
            return false;
        if (str1.includes(vowel) && str2.includes(vowel))
            flag = true;

    }
    return flag;
}
console.log(
    doesRhyme("Sam I am!", "Green eggs and ham."), // ➞ true

    doesRhyme("Sam I am!", "Green eggs and HAM."), // ➞ true
    // // Capitalization and punctuation should not matter.

    doesRhyme("You are off to the races", "a splendid day."), // ➞ false

    doesRhyme("and frequently do?", "you gotta move."), // ➞ false
)