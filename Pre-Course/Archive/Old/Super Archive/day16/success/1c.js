function getWaterLevel(numbersArr, totalWater) {
    if (totalWater === 0) return 0;

    let width = 0;
    for (let i = numbersArr.length - 1; i > -1; i--) {
        let [prevBar, curBar] = [numbersArr[i - 1], numbersArr[i]];
        let height = prevBar - curBar;
        ++width;

        let areaForWater = height * width; // water space available
        if (areaForWater < totalWater) {
            totalWater = totalWater - areaForWater;
        } else if (areaForWater === totalWater) {
            let waterLevel = prevBar; // bar on left is previous bar which is exactly full now
            return waterLevel;
        } else { // areaForWater > totalWater
            let heightConsumed = totalWater / width;
            let waterLevel = curBar + heightConsumed;
            return waterLevel;
        }
    }
}

console.log(getWaterLevel([2, 2, 2, 2], 4)); //3