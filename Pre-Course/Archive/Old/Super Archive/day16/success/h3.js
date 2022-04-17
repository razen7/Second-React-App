function canFind(searchArr, basketArr) {
    return searchArr.every(bigram => {
        return basketArr.some(word => word.includes(bigram))
    })
}


console.log(
    canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]), // ➞ true

    canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]), // ➞ false
    // # "cu" does not exist in any of the words.

    canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]), // ➞ true

    canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]), // ➞ false
)