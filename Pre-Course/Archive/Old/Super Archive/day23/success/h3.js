Ref: https://stackoverflow.com/questions/21997437/javascript-split-string-by-multiple-occurrences-of-letters

//  
function splitGroups(str) {
    return str.match(/(.)\1*/g)
}
console.log(
    splitGroups("555"), // → ["555"]

    splitGroups("5556667788"), // → ["555", "666", "77", "88"]

    splitGroups("aaabbbaabbab"), // → ["aaa", "bbb", "aa", "bb", "a", "b"]

    splitGroups("abbbcc88999&&!!!_"), // → ["a", "bbb", "cc", "88", "999", "&&", "!!!", "_"]
);