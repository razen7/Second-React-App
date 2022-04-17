mapLetters("dodo"); // should return { d: [0, 2], o: [1, 3] }
// Exercise 1
function mapLetters(word) {
    let map = {};
    // let objKeyExists

    for (let idx = 0; idx < word.length; idx++) {
        const char = word[idx];
        if (char in map) {
            map[char].push(idx);
        } else map[char] = [idx];
    }
    return map;
}