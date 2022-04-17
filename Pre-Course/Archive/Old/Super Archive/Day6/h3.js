// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.
// Exercise 3
function isAnagram(str1, str2) {
    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];
        let reg = new RegExp(char, 'gi');
        let posIdx = str1.search(reg);
        str1 = str1.slice(0, posIdx) + str1.slice(posIdx + 1)
        if (posIdx === -1) return false;
    }
    return true;
}
console.log(
    isAnagram("cristian", "Cristina")// should return true
    ,
    isAnagram("Dave Barry", "Ray Adverb")// should return true
    ,
    isAnagram("Nope", "Note")// should return false
)
console.log('test'.slice(0,0)+'test'.slice(1))