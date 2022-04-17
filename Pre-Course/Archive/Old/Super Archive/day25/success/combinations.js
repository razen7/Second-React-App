let input = "123";
input = "1234";
// Output :
//         "1, 2, 3"
//         "1, 23"
//         "12, 3"
//         "123"

combinations(input)
function combinations(str) {
    let firstArr = str.split('');
    helper([firstArr]);
}

function helper(arr, i = 2) {
    let firstArr = arr[0];
    // Victory
    if (i > arr[0].length) {
        console.log(arr);
        return;
    }

    // Battlefield
    for (let j = firstArr.length; j >= i; j--) {
        let sArr = [];
        let p1 = j - i;
        sArr.push(...firstArr.slice(0, p1));

        let p2 = p1 + i;
        sArr.push(firstArr.slice(p1, p2).join(''))

        sArr.push(...firstArr.slice(p2))

        if (i === 2) {
            if (j === 1)
                console.log(j, firstArr.slice(0, p1), 0, p1);
        }
        arr.push(sArr);
    }
    return helper(arr, ++i)
}