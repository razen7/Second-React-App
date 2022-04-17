function hashPlusCount(str) {
    let [hash, plus] = [0, 0];

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element === '#') {
            ++hash;
        } else if (element === '+') {
            ++plus;
        }
    }

    return [hash, plus];
}
console.log(hashPlusCount("###+")); // should return [3, 1]

hashPlusCount("##+++#"); // should return [3, 3]

hashPlusCount("#+++#+#++#"); // should return [4, 6]

hashPlusCount(""); // should return [0, 0]