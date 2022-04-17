function roleDice(rolls) {
    console.log(roleDiceHelper(rolls));
}

function roleDiceHelper(rolls, rArr = [], allResults = []) {
    if (rolls <= 0) {
        allResults.push([...rArr])
    } else {
        for (let c = 1; c < 7; c++) {
            let picked = c;
            rArr.push(picked);

            roleDiceHelper(rolls - 1, rArr, allResults)

            rArr.pop();
        }
        return allResults;
    }
}
roleDice(2)