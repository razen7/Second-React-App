console.log(
    combinations(2, 3),// ➞ 6

    combinations(3, 7, 4),// ➞ 84

    combinations(2, 3, 4, 5),// ➞ 120
)

function combinations() {
    let product = 1;
    for (const key in arguments) {
        const ele = arguments[key];
        product *= ele > 0 ? ele : 1;
    }
    return product
}