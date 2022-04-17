function getWaterLevel(numbersArr, totalWater) {
    if (totalWater === 0) return 0;

    let width = 0;
    let waterLevel;
    for (let i = numbersArr.length - 1; i > -1; i--) {

        let [prevBar, curBar] = [numbersArr[i - 1], numbersArr[i]];
        let height = prevBar - curBar;
        ++width;

        // if (prevBar === curBar) continue;

        let areaForWater = height * width; // water space available
        if (areaForWater === totalWater) {
            waterLevel = prevBar;
            return waterLevel;
        } else if (areaForWater < totalWater) {
            totalWater = totalWater - areaForWater;
            console.log('l');
        } else { // areaForWater > totalWater
            let heightConsumed = totalWater / width;
            waterLevel = curBar + heightConsumed;
            return waterLevel;
        }
    }
    return waterLevel;
}

console.log(getWaterLevel([2, 2, 2, 2], 4)); //3

