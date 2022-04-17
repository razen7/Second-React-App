// Exercise 2 
const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin) {
    if (pin.match(/[0-9]/g).length !== 4) return "Invalid input.";

    let movesArr = [];
    for (let i = 0; i < pin.length; i++) {
        let idx = i + Number(pin[i]);
        while (idx >= MOVES.length) {
            idx -= MOVES.length;
        }
        movesArr.push(MOVES[idx]);
    }
    return movesArr;
}
console.log(
    // danceConvert("32a1"), // should return "Invalid input."

    // danceConvert("0000"), // should return ["Shimmy", "Shake", "Pirouette", "Slide"]

    danceConvert("3856"), // should return [ "Slide", "Arabesque", "Pop", "Arabesque" ]

    danceConvert("9999"), // should return [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]

)