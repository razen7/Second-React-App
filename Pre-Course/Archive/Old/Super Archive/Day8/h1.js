// If the sizes match, return a array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
let zipIt = (arr1, arr2) => {
    if (arr1.length !== arr2.length)
        return "sizes don't match"

    let newArr = [];
    for (const idx in arr1) {
        newArr.push([arr1[idx], arr2[idx]]);
    }
    return newArr
}
zipIt(["Elise", "Mary"], ["John", "Rick"])
// should return [["Elise", "John"], ["Mary", "Rick"]]

zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
// should return "sizes don't match"

zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
 // should return [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]