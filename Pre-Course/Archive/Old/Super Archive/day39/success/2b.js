array = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
// snail(array) #=> [1, 2, 3, 6, 9, 8, 7, 4, 5]

function snail(array) {
    if (array.length > 0) {
        let snailArr = [];
        while (array.length > 0) {
            let queue = [];
            for (let rIdx = 0; rIdx < array.length; rIdx++) {
                const row = array[rIdx];
                if (rIdx === 0) {
                    snailArr.push(...row);
                } else if (rIdx === array.length - 1) {
                    snailArr.push(...row.reverse())
                } else {
                    queue.unshift(row.shift());
                    snailArr.push(row.pop())
                }
            }
            snailArr.push(...queue)
            array.shift();
            array.pop();
        }
        return snailArr;
    } else return [];
}
let arr2 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

console.log(snail(arr2)); //1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13
// console.log(snail(array)); //[1,2,3,6,9,8,7,4,5]
// console.log(snail([]));