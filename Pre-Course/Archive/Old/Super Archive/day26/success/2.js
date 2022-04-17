decisionTree(2)
function decisionTree(noOfDice) {
    decisionTreeHelper(noOfDice);
}

function decisionTreeHelper(noOfDice, result = []) {
    // Base Case
    if (noOfDice <= 0) {
        console.log(result)
        return;
    }
    // Recursive Case
    for (let i = 1; i < 7; i++) {
        //Pick a choice
        let pickedChoice = i;
        result.push(pickedChoice);

        //Explore all possibilities
        decisionTreeHelper(noOfDice - 1, result);

        //UnPicking the choice
        result.pop();
    }
}