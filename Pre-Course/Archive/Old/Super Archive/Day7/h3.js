// Exercise 3 - Most Valuable Item
// Given an object of stolen items, return the most expensive item on the list.

function mostExpensiveItem(items) {
    let mostExpensiveCost = 0;
    let mostExpensiveItem;
    for (const key in items) {
        if (Object.hasOwnProperty.call(items, key)) {
            const cost = items[key];
            if (cost > mostExpensiveCost) {
                mostExpensiveCost = cost;
                mostExpensiveItem = key;
            }
        }
    }
    return mostExpensiveItem;
}

mostExpensiveItem({
    piano: 2000,
})//➞ "piano"

mostExpensiveItem({
    tv: 30,
    skate: 20,
})//➞ "tv"

mostExpensiveItem({
    tv: 30,
    skate: 20,
    stereo: 50,
})//➞ "stereo"
