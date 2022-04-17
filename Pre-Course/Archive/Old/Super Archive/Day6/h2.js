// Exercise 2 - Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr) {
    let obj = {};
    let order = 0;
    for (const v of arr) {
        if (obj[v] === undefined)
            obj[v] = order++;
    }
    let orderedObj = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const order = obj[key];
            orderedObj[order] = isNaN(key) ? key : Number(key);
        }
    }
    return Object.values(orderedObj);
}
console.log(
    removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5])// should return [1, 2, 3, 5, 6, 7]
    ,
    removeDups(["The", "big", "cat"])// should return ["The", "big", "cat"]

    // removeDups(["John", "Taylor", "John"]);// should return ["John", "Taylor"]
)