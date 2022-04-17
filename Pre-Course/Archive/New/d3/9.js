console.log(spelling("bee")); // should return ["b", "be", "bee"]

spelling("happy"); // should return ["h", "ha", "hap", "happ", "happy"]

spelling("eagerly");  // should return  ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

function spelling(word) {
    let result = [];
    for (const char of word) {
        let pre = result[result.length - 1] ? result[result.length - 1] : '';
        result.push(pre + char)
    }
    return result;
}
