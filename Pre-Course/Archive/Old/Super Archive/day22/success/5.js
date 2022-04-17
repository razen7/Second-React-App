function isVowel(char) {
    if (char.length == 1) {
        return /[aeiou]/.test(char);
    }
}

function noOfConsonants(str, idx = 0, totalConsonants = 0) {
    let result = isVowel(str[idx]) ? 0 : 1;
    totalConsonants += result;
    //Last case
    if (idx === str.length - 1)
        return totalConsonants;

    //Recursive Case
    return noOfConsonants(str, idx + 1, totalConsonants);
}

console.log(noOfConsonants('aweber'));