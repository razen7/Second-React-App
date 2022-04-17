function getWaterLevel(numbersArr, totalWater) {
    if (totalWater === 0) return 0;

    let width = 0;
    for (let i = numbersArr.length - 1; i > 0; i--) {

        let [prevBar, curBar] = [numbersArr[i - 1], numbersArr[i]];
        let height = prevBar - curBar;
        ++width;

        let areaForWater = height * width; // water space available
        if (areaForWater < totalWater) {
            totalWater = totalWater - areaForWater;
        } else if (areaForWater === totalWater) {
            let waterLevel = prevBar;
            return waterLevel;
        } else { // areaForWater > totalWater
            let heightConsumed = totalWater / width;
            let waterLevel = curBar + heightConsumed;
            return waterLevel;
        }
    }
}
getWaterLevel([10, 6, 5, 2, 2, 1], 0);
// If X is 1, water rises to 0 units

getWaterLevel([10, 6, 5, 2, 2, 1], 1);
// If X is 1, water rises to 2 units

getWaterLevel([10, 6, 5, 2, 2, 1], 4);
// If X is 4, water rises to 3 units

getWaterLevel([10, 6, 5, 2, 2, 1], 7);
// If X is 7, water rises to 4 units

getWaterLevel([10, 6, 5, 2, 2, 1], 10);
// If X is 10, water rises to 5 units

getWaterLevel([10, 6, 5, 2, 2, 1], 12);
// If X is 12, water rises to 5.5 units