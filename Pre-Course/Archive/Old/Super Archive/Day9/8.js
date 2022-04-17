console.log(
    jazzify(["G", "F", "C"])// ➞ ["G7", "F7", "C7"]
    ,
    jazzify(["Dm", "G", "E", "A"])// ➞ ["Dm7", "G7", "E7", "A7"]
    ,
    jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])// ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
    ,
    jazzify([])// ➞ []
)

function jazzify(arr) {
    return arr
        .map(v => v.endsWith('7') ? v : v + 7)
}