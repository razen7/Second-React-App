rollDice(3)
function rollDice(noOfDice) {
    rollDiceHelper(noOfDice);
}

function rollDiceHelper(noOfDice, resultArr = []) {
    // Base Case
    if (noOfDice <= 0) {
        console.log(resultArr);
        return;
    }

    // Recursive Case
    for (let choice = 1; choice < 7; choice++) {
        // 1 Pick a choice
        let curChoice = choice;
        resultArr.push(curChoice);

        // 2 Explore Opportunities
        rollDiceHelper(noOfDice - 1, resultArr)

        // 3 Unpicking the choice
        resultArr.pop()
    }

}