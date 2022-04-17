// Create a function that moves all capital letters to the front of a word.
function capToFront(str) {
    let capital = str.match(/[A-Z]/g).join('');
    let small = str.match(/[a-z]/g).join('');
    return capital + small;
}
console.log(
capToFront("hApPy") //➞ "APhpy"
,
capToFront("moveMENT") //➞ "MENTmove"
,
capToFront("shOrtCAKE") //➞ "OCAKEshrt"
)