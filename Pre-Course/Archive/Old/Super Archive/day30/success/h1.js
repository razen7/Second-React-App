weight = [10, 2, 8, 5];
value = [10, 12, 8, 7];
bagWeight = 13
console.log(pickItems(weight, value, bagWeight)); // Output: 22

function pickItems(weight, value, bagWeight) {
    return pickItemsHelper(weight, value, bagWeight)
}

function pickItemsHelper(weight, value, bagWeight, max = Number.NEGATIVE_INFINITY, p1 = 0) {
    for (let i = p1 + 1; i < weight.length; i++) {
        if (weight[p1] + weight[i] <= bagWeight) {
            totalValue = value[p1] + value[i];
        }
        max = Math.max(max, totalValue);

        pickItemsHelper(weight, value, bagWeight, max, p1 + 1);
    }

    return max;
}