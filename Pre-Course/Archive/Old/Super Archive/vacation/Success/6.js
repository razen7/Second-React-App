// return true if any two adjacent words have this property: 
// One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).
// You can expect sentences in lowercase/uppercase.

function vowelLinks(str) { // O n * m 
    str = str.toLowerCase();
    strArr = str.split(' ');
    let result = strArr.some((v, idx, arr) => {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        for (const vowel of vowels) {
            if (v.endsWith(vowel)) {
                for (const vowel of vowels) {
                    if (arr[idx + 1] && arr[idx + 1].startsWith(vowel))
                        return true;
                }
            }
        }
    })
    return result;
}
console.log(
    vowelLinks("a very large appliance"),// ➞ true

    vowelLinks("go to edabit"),// ➞ true

    vowelLinks("an open fire"),// ➞ false

    vowelLinks("a sudden applause"),// ➞ false
)