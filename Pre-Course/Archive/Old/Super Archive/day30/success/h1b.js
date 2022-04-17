weight = [10, 2, 8, 5];
value = [10, 12, 8, 7];
bagWeight = 13
// console.log(pickItems(weight, value, bagWeight)); // Output: 22

weight2 = [10, 2, 3, 5];
value2 = [10, 12, 18, 7];
bagWeight2 = 13
console.log(pickItems(weight2, value2, bagWeight2)); 
// You can take weights 2 , 3 and 5 and the value will be 37.

function pickItems(weight, value, bagWeight) {
    return pickItemsHelper(weight, value, bagWeight)
}

function pickItemsHelper(weight, value, bagWeight, max = Number.NEGATIVE_INFINITY, p1 = 0) {
    // Base Case
    if (p1===weight.length) {
        return max;
    }
    
    // Recursive Case
    for (let i = p1 + 1; i < weight.length; i++) {
        let j = i;
        let totalWeight = weight[p1];
        let totalValue = value[p1];
        while (totalWeight + weight[j] <= bagWeight) {
            totalWeight += weight[j];
            totalValue += value[j];
            ++j;
        }
        max = Math.max(max, totalValue);
    }
    return pickItemsHelper(weight, value, bagWeight, max, p1 + 1);;
}