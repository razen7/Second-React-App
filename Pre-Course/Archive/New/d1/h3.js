console.log(societyName(["Adam", "Sarah", "Malcolm"])); // should return "ASM"

societyName(["Harry", "Newt", "Luna", "Cho"]) // should return "HNLC"

societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) // should return "PCRRMJ"

function societyName(arr) {
    return arr.map(v => v[0]).join('');
}