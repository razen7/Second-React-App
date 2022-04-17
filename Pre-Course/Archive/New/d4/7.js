console.log(firstNonRepeatingLetter('moonmen'));

function firstNonRepeatingLetter(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        let noRepeats = true;
        for (let j = 0; j < str.length; j++) {
            const cur = str[j];
            if (char === cur && j != i) {
                noRepeats = false;
                break;
            }
        }
        if (noRepeats) {
            return char
        }
    }
}