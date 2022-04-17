// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

function spelling(word) {
    let spellIt = [];
    let store = '';
    for (const char of word) {
        store += char;
        spellIt.push(store);
    }
    return spellIt;
}
spelling("bee"); // should return ["b", "be", "bee"]

spelling("happy"); // should return ["h", "ha", "hap", "happ", "happy"]

spelling("eagerly");  // should return  ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
