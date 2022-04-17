bomb("There is a bomb.") // should return  "Duck!!!"

bomb("Hey, did you think there is a bomb?")  // should return "Duck!!!"

bomb("This goes boom!!!") // should return "There is no bomb, relax."

function bomb(str) {
    return str.includes('bomb') ? "Duck!!!" : "There ; no bomb, relax."
}