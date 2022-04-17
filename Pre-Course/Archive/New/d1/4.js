console.log(
    reverseList([66, 22, 11, 6, 9]), // should return [9, 6, 11, 22, 66];
    reverseList([13, 2, 51, 64, 0]), // should return [0, 64, 51, 2, 13];
);

// Time C: O of N
// Space C: O of N
function reverseList(numbers) {
    let result = [];
    for (let i = numbers.length - 1; i > -1; i--) {
        const element = numbers[i];
        result.push(element);
    }
    return result;
}