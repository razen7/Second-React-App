array = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
// snail(array) #=> [1, 2, 3, 6, 9, 8, 7, 4, 5]

function snail(array) {
    if (array.length > 0) {
        let snailArr = [];
        while (array.length > 0) {
            let stack = [];
            for (let rIdx = 0; rIdx < array.length; rIdx++) {
                const row = array[rIdx];
                if (rIdx === 0) {
                    snailArr.push(...row);
                } else if (rIdx === array.length - 1) {
                    snailArr.push(...row.reverse())
                } else {
                    stack.push(row.shift());
                    snailArr.push(row.pop())
                }
            }
            snailArr.push(...stack)
            array.shift();
            array.pop();
        }
        return snailArr;
    } else return [];
}

console.log(snail(array)); //[1,2,3,6,9,8,7,4,5]
// console.log(snail([]));